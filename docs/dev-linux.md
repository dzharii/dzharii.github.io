## X11
- 2022-02-24 [Xlib transparent window with OpenGL support](https://gist.github.com/je-so/903479/834dfd78705b16ec5f7bbd10925980ace4049e17)
> This program demonstrates how an X11 window with OpenGL support  can be drawn transparent.

## Systemd

- 2022-10-26 [systemd Shutdown Units - Poseidon Labs](https://www.psdn.io/posts/systemd-shutdown-unit/)

  > Designing a system to shutdown gracefully can be tricky. In an ideal world, every service would be managed by a systemd unit. ExecStart would start a process that handles SIGTERM by stopping itself and an  ExecStop would inform the process and block to gracefully stop the process and its resources.
  >
  > But not all software stops gracefully or does a full teardown of what it set up. In this post, we’ll look at systemd’s shutdown behavior and strategies for writing systemd units that perform custom cleanup tasks before shutdown.

## Kiosk

- 2022-10-22 [linux - Browser instead of window manager? - Super User](https://superuser.com/questions/219511/browser-instead-of-window-manager)
```sh
yes:

% startx /usr/bin/google-chrome --kiosk
(or use any other webbrowser)

you could also add this to your .xinitrc / .xsession file:

exec /usr/bin/google-chrome --kiosk
```

## Bash Snippets

- 2022-05-21 [Bash trap for debugging bash scripts](https://www.onlinegdb.com/1h1BpiINv)
```bash
trap 'echo "# $BASH_COMMAND";read' DEBUG
echo line1
echo line2
echo line3
echo "Hello World";
```

## Tools 

### Data processing
- 2022-03-07 [TomWright/dasel: Select, put and delete data from JSON, TOML, YAML, XML and CSV files with a single tool. Supports conversion between formats and can be used as a Go package.](https://github.com/TomWright/dasel)
> Comparable to jq / yq, but supports JSON, YAML, TOML, XML and CSV with zero runtime dependencies.

