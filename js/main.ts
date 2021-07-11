import "../css/main.less";

import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"

library.add(faLinkedin, faEnvelope);
dom.watch();

const dataFadeAttribute = "data-fade";

const getFade = (div: Element) => parseInt(div.getAttribute(dataFadeAttribute));

[].slice
	.call(document.querySelectorAll(`[${dataFadeAttribute}]`))
	.sort((a: Element, b: Element) => getFade(a) - getFade(b))
	.forEach((df: Element) =>
		setTimeout(() => df.classList.remove("is-paused"), 500 * getFade(df))
	);
