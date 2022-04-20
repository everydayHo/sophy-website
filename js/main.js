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
	});
});

// details page

var $productPictures = $('.product_pictures'),
	$bigImg = $productPictures.find('.big_img'),
	$thumbImgList = $productPictures.find('.thumb_img li');

$thumbImgList.click(function () {
	$(this).addClass('active').siblings().removeClass('active');
	var targetImgPath = 'images/' + $(this).find('img').attr('data-target');
	$bigImg.attr('src', targetImgPath);
});

var $quantity = $('.quantity'),
	$unitPrice = $quantity.attr('data-unitprice'),
	$qtyBtn = $quantity.find('span'),
	$qtyInput = $quantity.find('input'),
	$targetTotal = $('.total_price .price');

$qtyBtn.click(function () {
	var currentCount = $qtyInput.val();
	if ($(this).hasClass('plus')) {
		currentCount++;
		$qtyInput.val(currentCount);
	} else {
		if (currentCount > 1) {
			currentCount--;
			$qtyInput.val(currentCount);
		}
	}
	var total = (currentCount * $unitPrice).toLocaleString('en');
	$targetTotal.text('$' + total);
});
