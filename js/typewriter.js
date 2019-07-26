var i = 0;
var selectedText = "I'm Wildo, a travel blogger and photographer. Take a look around my blog to discover a treasure trove of hidden London gems.";
var text = "";

(function type() {
	text = selectedText.slice(0, ++i);
	document.getElementById("typing").innerHTML = text;
	// Comment this back in to reset typing after it's finished
	// if (text.length === selectedText.length) {
	// 	i = 0;
	// }
	setTimeout(type, 200);
})();