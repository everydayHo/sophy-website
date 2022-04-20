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
	});
});
