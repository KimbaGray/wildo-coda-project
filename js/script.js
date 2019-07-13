// Search button when press enter
// var input = document.getElementById("mySearch");

// input.addEventListener("keyup", function(event) {
//   if (event.keyCode === 13) {
//    event.preventDefault();
//    document.getElementById("text").innerHTML = message;;
//   }
// });

var message = "We're working on this feature. Watch this space 🕵️‍♀️";
var searchBtn = document.getElementById("searchButton");
searchBtn.addEventListener("click", function() {
console.log("Hello");
document.getElementById("text").innerHTML = message;
});


