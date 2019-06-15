document.addEventListener('DOMContentLoaded', function() {
    mobileMenu();
});


function mobileMenu() {

	var navbutton =  document.querySelector('.nav-toggle');

	navbutton.onclick = function() {

		var menu = document.querySelector('.menu');
		
		if (menu.className == 'menu') {
			menu.className += ' open';
			navbutton.className += ' open';
		} else {
			menu.className = 'menu';
			navbutton.className = 'nav-toggle';
		}
	}
};