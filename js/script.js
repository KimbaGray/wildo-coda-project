var typeString = ["I'm Wildo, a travel blogger and photographer. Take a look around my blog to discover a treasure trove of hidden London gems."];
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
	setTimeout(type, 175);
})();


var input = document.getElementById("mySearch");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("searchButton").click();
  }
});