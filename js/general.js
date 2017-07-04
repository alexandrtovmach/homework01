function init() {
	vertAlign();
}
function vertAlign() {
	var arrEl = document.getElementsByTagName('div');
	for (var i = 0; i < arrEl.length; i++) {
		if (arrEl[i].hasAttribute('vertalign')) {
			arrEl[i].style.padding = (arrEl[i].clientHeight/2 - 15/2) + 'px 25px';
			//arrEl[i].style.padding = (arrEl[i].clientHeight/2 - 15/2) + 'px';
			console.log(arrEl.clientHeight)
			//arrEl[i].style.paddingTop = 
		}
	}
}