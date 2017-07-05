function init() {
	
}
function logoAnim() {
	var elem = document.getElementById('textAnim');
	var words = ['2017', 'be better', 'b', 'bst', 'best start for smart', 'javascript', 'thank you for a chance', 'hardcore summer'];
	function printWord(word) {
		var a = 0;
		var prt = setTimeout(function prints() {
			if (a > word.length) {
				clearTimeout(prt)
				var dlt = setTimeout(function deletes() {
					if (a < 0) {
						clearTimeout(dlt)
					} else {
						elem.innerHTML = word.substr(0, a)
						a--;
						setTimeout(deletes, 100);
					}
				}, 2000);
				
			} else {
				elem.innerHTML = word.substr(0, a)
				a++;
				setTimeout(prints, 300);
			}
		}, 0);
	}
	var i = 0;
	setTimeout(function run() {
		if (i >= words.length) { i = 0}
		printWord(words[i]);
		i++;
		setTimeout(run, (700*words[Math.abs(i-1)].length + 2000));
	}, 0);
	
}