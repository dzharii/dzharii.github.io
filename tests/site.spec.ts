import {expect, test} from '@playwright/test';
import {existsSync, readFileSync, readdirSync, statSync} from 'node:fs';
import {resolve, sep} from 'node:path';

const baseURL = 'http://127.0.0.1:4173';
const siteOrigin = new URL(baseURL);
const buildDirectory = resolve('build');
const expectedRoutes = JSON.parse(
  readFileSync(resolve('tests/expected-routes.json'), 'utf8'),
) as string[];
const expectedRouteSet = new Set(expectedRoutes);
const productionRoutes = buildRoutes();

function buildRoutes(directory = buildDirectory): string[] {
  const routes: string[] = [];

  function visit(current: string): void {
    for (const entry of readdirSync(current, {withFileTypes: true})) {
      const path = resolve(current, entry.name);
      if (entry.isDirectory()) {
        visit(path);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        const relative = path.slice(buildDirectory.length + 1).split(sep).join('/');
        if (relative === 'index.html') {
          routes.push('/');
        } else if (relative.endsWith('/index.html')) {
          routes.push(`/${relative.slice(0, -'/index.html'.length)}`);
        } else {
          routes.push(`/${relative.slice(0, -'.html'.length)}`);
        }
      }
    }
  }

  visit(directory);
  return [...new Set(routes)].sort();
}

function normalizeRoute(pathname: string): string {
  let decoded: string;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    decoded = pathname;
  }
  if (decoded !== '/') {
    decoded = decoded.replace(/\/+$/, '');
  }
  return decoded || '/';
}

function localBuildTargetExists(rawURL: string, sourceRoute: string): boolean {
  let url: URL;
  try {
    url = new URL(rawURL, new URL(sourceRoute, baseURL));
  } catch {
    return true;
  }

  if (
    !['http:', 'https:'].includes(url.protocol) ||
    (url.origin !== siteOrigin.origin && url.hostname !== 'blog.zharii.com')
  ) {
    return true;
  }

  const route = normalizeRoute(url.pathname);
  if (expectedRouteSet.has(route)) {
    return true;
  }

  const relative = decodeURIComponent(url.pathname).replace(/^\/+/, '');
  const direct = resolve(buildDirectory, relative);
  const relativeToBuild = direct.slice(buildDirectory.length + 1);
  if (
    direct === buildDirectory ||
    relativeToBuild.startsWith(`..${sep}`) ||
    relativeToBuild === '..'
  ) {
    return false;
  }

  return (
    existsSync(direct) ||
    existsSync(resolve(direct, 'index.html')) ||
    existsSync(`${direct}.html`) ||
    (statExists(direct) && statSync(direct).isFile())
  );
}

function statExists(path: string): boolean {
  try {
    statSync(path);
    return true;
  } catch {
    return false;
  }
}

test('production route manifest preserves every legacy URL', () => {
  const productionRouteSet = new Set(productionRoutes);
  const removedRoutes = expectedRoutes.filter(
    (route) => !productionRouteSet.has(route),
  );
  expect(removedRoutes).toEqual([]);
});

for (const route of productionRoutes) {
  test(`page ${route}`, async ({page}) => {
    const runtimeErrors: string[] = [];
    page.on('pageerror', (error) =>
      runtimeErrors.push(`pageerror: ${error.message}`),
    );
    page.on('response', (response) => {
      if (
        response.url().startsWith(siteOrigin.origin) &&
        response.status() >= 400
      ) {
        runtimeErrors.push(
          `HTTP ${response.status()}: ${new URL(response.url()).pathname}`,
        );
      }
    });

    const response = await page.goto(route, {
      waitUntil: 'domcontentloaded',
      timeout: 30_000,
    });
    expect(response, `No response for ${route}`).not.toBeNull();
    expect(response!.status(), `HTTP failure for ${route}`).toBeLessThan(400);

    await expect(page.locator('body').first()).toBeAttached();
    await expect
      .poll(async () => (await page.locator('body').innerHTML()).length)
      .toBeGreaterThan(20);
    await page.waitForTimeout(250);

    const targets = await page
      .locator('a[href], img[src], source[src], video[poster]')
      .evaluateAll((elements) =>
        elements.flatMap((element) => {
          const values = ['href', 'src', 'poster']
            .map((name) => element.getAttribute(name))
            .filter((value): value is string => Boolean(value));
          return values;
        }),
      );
    const brokenTargets = [
      ...new Set(
        targets.filter(
          (target) => !localBuildTargetExists(target, route),
        ),
      ),
    ];

    expect(brokenTargets, `Broken local targets on ${route}`).toEqual([]);
    expect(runtimeErrors, `Runtime failures on ${route}`).toEqual([]);
  });
}
