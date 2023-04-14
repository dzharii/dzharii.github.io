const Key_Space =  "Space";
const Key_J = "KeyJ";
const Key_K = "KeyK";
const Key_L = "KeyL";
const Key_Semicolon = "Semicolon";

let PreviousGlobalKeyPressed = {};
const GlobalKeyPressed = {};

const keyPatterns = {
    '10000': 'A',
    '01001': 'B',
    '10111': 'C',
    '10100': 'D',
    '01000': 'E',
    '11010': 'F',
    '10110': 'G',
    '01111': 'H',
    '00100': 'I',
    '11101': 'J',
    '10010': 'K',
    '00110': 'L',
    '01010': 'M',
    '11000': 'N',
    '00010': 'O',
    '11001': 'P',
    '01101': 'Q',
    '11110': 'R',
    '00011': 'S',
    '01100': 'T',
    '00001': 'U',
    '11011': 'V',
    '10101': 'W',
    '01011': 'X',
    '10001': 'Y',
    '00101': 'Z',
};

(function main() {
    const elMain = findOrThrow('#main');

    const updateLegend = buildLegend(keyPatterns);

    const debounceOnKeyPress = debounce(function (keys) {
        console.log(keys);
        //elMain.textContent += JSON.stringify(keys) + '\n';

        const statePattern = keyStateToPattern(keys);

        if (keyPatterns[statePattern]) {
            updateLegend(statePattern);
            console.log("Pattern " + keyPatterns[statePattern]);
            elMain.textContent += keyPatterns[statePattern] + '\n';
        }
    });

    handleKeyPress(debounceOnKeyPress);


})();

function buildLegend(keyPatterns) {
    const elLegend = findOrThrow('#legend');

    const patternToDom = {};

    const elLegendUl = make('ul');
    elLegendUl.classList.add('legendList');


    const keysSortedByValue = Object.keys(keyPatterns).sort((a, b) => keyPatterns[a].localeCompare(keyPatterns[b]));

    keysSortedByValue.forEach(pattern => {
        const elLi = make('li');
        const elSpan = make('span');
        elSpan.classList.add('pattern');

        const dots = pattern.split('').map(x => x === '1' ? '●' : '○');

        elSpan.append(
            make('span', {
                className : 'letter',
                textContent: keyPatterns[pattern] + ': '
            }),
        );

        elSpan.append.apply(elSpan, dots.map(x => make('span', { className : 'dot', textContent: x })));

        elLi.appendChild(elSpan);
        elLegendUl.appendChild(elLi);
        patternToDom[pattern] = elSpan;
    });

    elLegend.appendChild(elLegendUl);

    const updateLegendFn = (pattern) => {
        if (!patternToDom[pattern]) {
            return;
        }

        patternToDom[pattern].classList.add('active');
        setTimeout(() => {
            patternToDom[pattern].classList.remove('active');
        }, 200);

    };
    return updateLegendFn;
}


function keyStateToPattern(state) {
    return [
        !!state[Key_Space],
        !!state[Key_J],
        !!state[Key_K],
        !!state[Key_L],
        !!state[Key_Semicolon]
    ].map(x => x ? '1' : '0').join('');
}

// pattern is 00000; can be 1 or 0
// the position order: Key_Space Key_j Key_k Key_l Key_Semicolon
//
function testPattern(pattern, state) {
    const pat = pattern.split('').map(x => x === '1');
    const keyState = [
        !!state[Key_Space],
        !!state[Key_J],
        !!state[Key_K],
        !!state[Key_L],
        !!state[Key_Semicolon]
    ]


    console.log(pat);
    console.log(JSON.stringify(state));
    console.log("Keystate:");
    console.log(keyState);


    const match = pat[0] == keyState[0]
        && pat[1] === keyState[1]
        && pat[2] === keyState[2]
        && pat[3] === keyState[3]
        && pat[4] === keyState[4]
    console.log('MATCH:' + match);
    return match;
}

function debounce(fn) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            fn.apply(this, arguments);
        }, 100);
    };
}

// compare 2 javascript objects and return true if they are equal
function areEqual(current, previous) {
    if (!current) {
        return false;
    }
    if (!previous) {
        return false;
    }

    const currentKeys = Object.keys(current);
    const previousKeys = Object.keys(previous);
    if (currentKeys.length !== previousKeys.length) {
        return false;
    }
    for (let i = 0; i < currentKeys.length; i++) {
        const key = currentKeys[i];
        if (current[key] !== previous[key]) {
            return false;
        }
    }
    return true;
}


function handleKeyPress(onKeyPressCb) {
    document.addEventListener('keydown', function (e) {
        const kw = e.code;
        console.log(kw);

        const supportedKeyPressed =
               kw === Key_Space
            || kw === Key_Semicolon
            || kw === Key_J
            || kw === Key_K
            || kw === Key_L;

        GlobalKeyPressed[kw] = true;

        if (supportedKeyPressed && !areEqual(GlobalKeyPressed, PreviousGlobalKeyPressed)) {
            onKeyPressCb(Object.assign({}, GlobalKeyPressed));
        }
        PreviousGlobalKeyPressed = Object.assign({}, GlobalKeyPressed);

    });

    document.addEventListener('keyup', function (e) {
        delete GlobalKeyPressed[e.code];
        PreviousGlobalKeyPressed = Object.assign({}, GlobalKeyPressed);
    });
}

function find(selector) {
    return document.querySelector(selector);
}

function findOrThrow(selector) {
    var element = find(selector);
    if (!element) {
        throw new Error('Element not found: ' + selector);
    }
    return element;
}

function findAll(selector) {
    return document.querySelectorAll(selector);
}

function make(domElementName, props) {
    const el = document.createElement(domElementName);
    if (props) {
        Object.keys(props).forEach(key => {
            el[key] = props[key];
        });
    }
    return el;
}

