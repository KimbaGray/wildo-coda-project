var typeString = ["My name's Wildo Coda and I'm a travel blogger and photographer. Take a look around my site to discover a treasure trove of hidden London gems."];
var i = 0;
var count = 0;
var selectedText = "";
var text = "";
(function type() {
	if (count == typeString.length) {
		count = 0;
	}
	selectedText = typeString[count];
	text = selectedText.slice(0, ++i);
	document.getElementById("typing").innerHTML = text;
	if (text.length === selectedText.length) {
		count++;
		i = 0;
	}
	setTimeout(type, 125);
})();
