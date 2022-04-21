'use strict';

const searchBtn = document.querySelector('.shopping_nav .search_btn');

const searchForm = document.querySelector('.search_form');

searchBtn.addEventListener('click', () => {
	searchForm.classList.toggle('active');
});

// bxslider

$(document).ready(function () {
	$('.slider').bxSlider({
		controls: false,
		mode: 'vertical',
		infiniteLoop: true,
		auto: true,
		resposive: true,
	});
});

$(document).ready(function () {
	$('.best_item_list').bxSlider({
		mode: 'horizontal',
		controls: false,
		infiniteLoop: true,
		maxSlides: 3,
		minSlides: 3,
		slideWidth: 800,
		infiniteLoop: true,
		auto: true,
		resposive: true,
	});
});
