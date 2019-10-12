const toggle_btn = document.getElementById('toggle__btn'),
	  header_nav = document.getElementById('header__nav');



var menu_active = false
toggle_btn.addEventListener('click', toggle_menu);


function toggle_menu() {
	if(menu_active) {
		this.classList.remove('active');
		menu_active = false
		header_nav.classList.remove('active');
	} else {
		this.classList.add('active');
		menu_active = true
		header_nav.classList.add('active');

	}
}
document.addEventListener('DOMContentLoaded', function() {

    const header = document.getElementById("header"),
    	  logo = document.getElementById("header__img");

    window.addEventListener('scroll', function() {
        header.style.background = window.pageYOffset > (header.offsetHeight) ? '#fff' : '';  
        header.style.boxShadow = window.pageYOffset > (header.offsetHeight) ? '7px 7px 30px 0px rgba(50, 50, 50, 0.3)' : '';  
        logo.style.height = window.pageYOffset > (header.offsetHeight) ? '80px' : '';  
        logo.style.width = window.pageYOffset > (header.offsetHeight) ? '80px' : '';  
    });

});