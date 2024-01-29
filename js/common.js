$(document).ready(function () {
	$('[data-fancybox="gallery"]').fancybox({
		// Options will go here
	})



	// Выпадающий список у десктопного меню
	let header_topline_content_cities = document.querySelector('.header_topline_content_cities_desctop div');
	let header_topline_content_cities_submenu = document.querySelector('.header_topline_content_cities_submenu_desctop');
	
	if (header_topline_content_cities) {
		header_topline_content_cities.addEventListener('click', function(event) {
			header_topline_content_cities_submenu.classList.toggle('dn');
		event.stopPropagation(); // Остановка всплытия события
	  });
	}
	
	header_topline_content_cities_submenu.addEventListener('click', function(event) {
	  event.stopPropagation(); // Остановка всплытия события
	});



	// Меню бргер
	let menu_mob = document.querySelector('.header_mobile_burgermenu')
	let header_menu_open = document.querySelector('.burger_menu_open')
	let header_menu_close = document.querySelector('.burger_menu_close')


	header_menu_open.addEventListener('click', function(){
		header_menu_close.classList.toggle('dn')
		header_menu_open.classList.toggle('dn')
		menu_mob.classList.toggle('dn')
	});

	header_menu_close.addEventListener('click', function(){
		header_menu_open.classList.toggle('dn')
		header_menu_close.classList.toggle('dn')
		menu_mob.classList.toggle('dn')
	});



	// Выпадающий список у мобильного меню
	let header_mobile_burgermenu_conent_cities = document.querySelector('.header_mobile_burgermenu_conent_cities div');
	let header_mobile_burgermenu_conent_cities_submenu = document.querySelector('.header_mobile_burgermenu_conent_cities_submenu');
	
	if (header_mobile_burgermenu_conent_cities) {
		header_mobile_burgermenu_conent_cities.addEventListener('click', function(event) {
			header_mobile_burgermenu_conent_cities_submenu.classList.toggle('dn');
		event.stopPropagation(); // Остановка всплытия события
	  });
	}
	
	header_mobile_burgermenu_conent_cities_submenu.addEventListener('click', function(event) {
	  event.stopPropagation(); // Остановка всплытия события
	});



	// Выпадающий список_2 у десктопного меню
	let li_has_children_conent_list = document.querySelector('.li_has_children_conent_list');
	let conent_list_submenu = document.querySelector('.conent_list_submenu');
	
	if (li_has_children_conent_list) {
		li_has_children_conent_list.addEventListener('click', function(event) {
			conent_list_submenu.classList.toggle('dn');
		event.stopPropagation(); // Остановка всплытия события
	  });
	}
	
	conent_list_submenu.addEventListener('click', function(event) {
	  event.stopPropagation(); // Остановка всплытия события
	});
});