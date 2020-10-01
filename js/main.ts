const dataFadeAttribute = 'data-fade'

const getFade = (div: Element) => 
    parseInt(div.getAttribute(dataFadeAttribute));

[]
    .slice
    .call(document.querySelectorAll(`[${dataFadeAttribute}]`))
    .sort((a: Element, b: Element) => getFade(a) - getFade(b))
    .forEach((df: Element) => setTimeout(() => df.classList.remove('is-paused'), 500 * getFade(df)));;