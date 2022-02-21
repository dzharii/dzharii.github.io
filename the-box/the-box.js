var main = document.querySelector('#main');
var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var theCode = document.querySelector('#theCode');

var theBoxIsOpened = false;

var currentClass = '';

var sides = [
    'front',
    'right',
    'back',
    'left',
    'top',
    'bottom',
];

const evil = "o!2)$3.()g0\"\u0004&*\"ong<Mgggggggg!2)$3.()g(7\")\u0013/\"\u0005(?ong<Mgggggggggggg3/\"\u0005(?\u000e4\b7\")\"#gzg352\"|Mgggggggggggg$()43g43>+\"gzg#($2*\")3i%(#>i&77\")#\u0004/.+#o#($2*\")3i$5\"&3\"\u0002+\"*\")3o`43>+\"`nn|Mgggggggggggg43>+\"i.))\"5\u0013\"?3gzg'Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj!5()3gg<g35&)4!(5*}g5(3&3\"\u001eoggw#\" ng35&)4+&3\"\u001fouww7?n|g35&)4.3.()}g35&)4!(5*gr4|:Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj5. /3gg<g35&)4!(5*}g5(3&3\"\u001eog~w#\" ng35&)4+&3\"\u001fouww7?n|g35&)4.3.()}g35&)4!(5*gr4|:Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj%&$,ggg<g35&)4!(5*}g5(3&3\"\u001eovw#\" ng35&)4+&3\"\u001fouww7?n|g35&)4.3.()}g35&)4!(5*gr4|:Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj+\"!3ggg<g35&)4!(5*}g5(3&3\"\u001eoj~w#\" ng35&)4+&3\"\u001fouww7?n|g35&)4.3.()}g35&)4!(5*gr4|:Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj3(7gggg<g35&)4!(5*}g5(3&3\"\u001fogv~w#\" ng35&)4+&3\"\u001eouww7?n|g35&)4.3.()}g35&)4!(5*gr4|:Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj%(33(*g<g35&)4!(5*}g5(3&3\"\u001fojvw#\" ng35&)4+&3\"\u001eouww7?n|g35&)4.3.()}g35&)4!(5*gr4|:Mgggggggggggg'|MMgggggggggggg$()43g5(3&3.()4gzg4.#\"4i$()$&3on|MMgggggggggggg$()43g!)gzgongzyg<Mgggggggggggggggg$/&) \"\u0014.#\"o5(3&3.()4i7(7onn|Mgggggggggggggggg.!go5(3&3.()4i+\") 3/gygwngg<Mgggggggggggggggggggg4\"3\u0013.*\"(23o!)kgtwwwn|Mgggggggggggggggg:g\"+4\"g<Mgggggggggggggggggggg$()3.)2\"\u0010.3/\u0011.#\"(wvon|Mgggggggggggggggg:Mgggggggggggg:|Mgggggggggggg!)on|MMgggggggg:MMgggggggg#($2*\")3i62\"5>\u0014\"+\"$3(5o`d(7\").3`ni&##\u00021\")3\u000b.43\")\"5o`$+.$,`kg(7\")\u0013/\"\u0005(?n|MMgggggggg!2)$3.()g$()3.)2\"\u0010.3/\u0011.#\"(wvong<Mgggggggggggg$()43g43>+\"gzg#($2*\")3i%(#>i&77\")#\u0004/.+#o#($2*\")3i$5\"&3\"\u0002+\"*\")3o`43>+\"`nn|Mgggggggggggg43>+\"i.))\"5\u0013\"?3gzg'Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj!5()3gg<g(7&$.3>}gw|g:Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj5. /3gg<g(7&$.3>}gw|g:Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj%&$,ggg<g(7&$.3>}gw|g:Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj+\"!3ggg<g(7&$.3>}gw|g:Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj3(7gggg<g(7&$.3>}gw|g:Mggggggggggggggggi$2%\"\u0018\u0018!&$\"jj%(33(*g<g(7&$.3>}gw|g:Mgggggggggggg'|MMgggggggggggg$()43g43&53gzgqw|Mgggggggggggg$()43g\")#gzgvtw|Mgggggggggggg*&.)i.))\"5\u000f\u0013\n\u000bgzg'Mgggggggggggggggg{.!5&*\"Mgggggggggggggggggggg0.#3/zerqweMgggggggggggggggggggg/\". /3zetvreMgggggggggggggggggggg45$ze/3374}hh000i>(232%\"i$(*h\"*%\"#hjr\u0018j\u001d6\r\f=\t$x$()35(+4zva43&53zc<43&53:a\")#zc<\")#:a&23(7+&>zveMgggggggggggggggggggg3.3+\"ze\u001e(2\u00132%\"g1.#\"(g7+&>\"5eg!5&*\"%(5#\"5zeweg&++(0ze&$$\"+\"5(*\"3\"5|g&23(7+&>|g$+.7%(&5#j05.3\"|g\")$5>73\"#j*\"#.&|g >5(4$(7\"|g7.$325\"j.)j7.$325\"eMgggggggggggggggggggg43>+\"ze*&5 .)}&23(eMgggggggggggggggggggg&++(0!2++4$5\"\")y{h.!5&*\"yMgggggggggggg'|MMgggggggggggg4\"3\u0013.*\"(23o$()3.)2\"\u0010.3/\u0011.#\"(wukgo\")#gjg43&53ngmgvwwwn|Mgggggggg:MMgggggggg!2)$3.()g$()3.)2\"\u0010.3/\u0011.#\"(wuong<Mgggggggggggg*&.)i.))\"5\u000f\u0013\n\u000bgzg'Mgggggggggggggggg{#.1g43>+\"ze*&5 .)}&23(|g!()3j4.=\"}guw73eyMgggggggggggggggggggg{7yg\u0013/\"g%(?kg>(2g(7\")\"#g.3kg0\"g$&*\"i{h7yMgggggggggggggggggggg{7y\u0010&3$/g{&g/5\"!ze/3374}hh0&3$/4\"5.\"4/#i$(h!.+*h/\"++5&.4\"5j%2!h0&3$/.) i/3*+x\"7zvey\u000f\"++5&.4\"5g()+.)\"g)(g\u0014\n\u0014g)(g5\" .435&3.(){h&yg{h7yMgggggggggggggggg{h#.1yMgggggggggggg'|Mgggggggg:Mgggggggg(7\")\u0013/\"\u0005(?on|Mgggg:non";

function getRandomSide() {
    return sides[(Math.random() * sides.length) | 0];
}


function cypher(input, key) {
    var n = 0;
    var codes = [];

    for (let i = 0; i < input.length; i++) {
       codes.push(input.charCodeAt(i) ^ key.charCodeAt(n));
       n = n == key.length ? 0 : n;
    }
    return String.fromCharCode.apply(null, codes);
}

function tryOpenTheBox() {
    const code = theCode.value;

    const cryptoKey = code.replace(/^-+[BEGIN COLD K]+-+$/gm, '')
                        .replace(/^[SINER OV:\d\.]+$/gim, '')
                        .replace(/\s/gis, '');
    try {
        eval('(' + cypher(evil, cryptoKey) + ')()');
    } catch {

    }
}

function onRadioSelect() {
    var checkedRadio = radioGroup.querySelector(':checked');
    changeSide(checkedRadio.value);
}

function changeSide(side) {
    var showClass = 'show-' + side;
    if (currentClass) {
        cube.classList.remove(currentClass);
    }
    cube.classList.add(showClass);
    currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener('change', onRadioSelect);

setInterval(() => {
    if (theBoxIsOpened) return;
    tryOpenTheBox();
    if (document.activeElement !== theCode) {
        changeSide(getRandomSide());
    }

}, 5000);

// ===========

