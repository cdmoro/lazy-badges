!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).lb={})}(this,function(e){"use strict";e.init=(()=>{document.querySelectorAll("[data-lb-badge]").forEach(e=>{e.classList.add("lb-badge")})}),e.remove=(e=>{const t=document.getElementById(e);t&&t.classList.remove("lb-badge")}),e.removeAll=(()=>{document.querySelectorAll("[data-lb-badge]").forEach(e=>{e.classList.remove("lb-badge")})}),e.set=((e,t)=>{const d=document.getElementById(e);d&&(d.classList.add("lb-badge"),d.dataset.lbBadge=t.toString())}),Object.defineProperty(e,"__esModule",{value:!0})});

function styleInject(id, css) {
	if (!css || typeof document === 'undefined') { return; }

	var element;
	var head = document.head || document.getElementsByTagName('head')[0];
	var styleElements  = head.getElementsByTagName('style');

	// To prevent dublicate of the style code during the script reload
	for (var i = 0; i < styleElements.length; i++) {
		if (styleElements[i] && styleElements[i].innerText && styleElements[i].innerText.startsWith('/*for=' + id)) {
			element = styleElements[i];
		}
	}

	if (!element) {
		element = document.createElement('style');
		element.type = 'text/css';
		head.insertBefore(element, styleElements[0] || head.firstChild);
	}

	if (element.styleSheet) {
		element.styleSheet.cssText = css;
	} else {
		var text = document.createTextNode('/*for=' + id + '*/' + css);
		element.innerHTML = "";
		element.appendChild(text);
	}
};
styleInject("lb", ".lb-badge {   position: relative;}.lb-badge[data-lb-badge]::after {   content: attr(data-lb-badge);   position: absolute;   top: -10px;   right: -10px;   background: #dc3545;   color: white;   text-align:center;   border-radius: .25rem;   z-index: 10;   padding: 0 .25rem;   font-size: .9rem;}");