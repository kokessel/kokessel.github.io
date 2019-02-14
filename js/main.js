const getFade = (div) => parseInt(div.getAttribute('data-fade'));

const dataFades = [].slice.call(document.querySelectorAll('[data-fade]')).sort((a, b) => getFade(a) - getFade(b)).forEach(df => setTimeout(() => df.classList.remove('is-paused'), 500 * getFade(df)));;

const doWave = () => {
    let i, n, s = '';

    for (i = 0; i < 10; i++) {
        n = Math.floor(Math.sin((Date.now() / 200) + (i / 2)) * 4) + 4;

        s += String.fromCharCode(0x2581 + n);
    }

    window.location.hash = s;

    setTimeout(doWave, 50);
}

doWave();