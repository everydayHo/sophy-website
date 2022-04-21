'use strict';

$('.price_range').slider({
	range: true,
	min: 0,
	max: 1000,
	values: [87, 500],
	create: function (event, ui) {
		var slideVal = $('.price_range span ');
		var slideFirstVal = slideVal.filter(':first-of-type');
		var slideLastVal = slideVal.filter(':last-of-type');

		slideVal.html('<i></i>');
		slideFirstVal.find('i').text($('.price_range').slider('values', 0));
		slideLastVal.find('i').text($('.price_range').slider('values', 1));
	},
	slide: function (event, ui) {
		var slideVal = $('.price_range span ');
		var slideFirstVal = slideVal.filter(':first-of-type');
		var slideLastVal = slideVal.filter(':last-of-type');

		slideVal.html('<i></i>');

		$('#from').val('$' + ui.values[0]);
		$('#to').val('$' + ui.values[1]);
		slideFirstVal.find('i').text(ui.values[0]);
		slideLastVal.find('i').text(ui.values[1]);
	},
});
$('#from').val($('.price_range').slider('values', 0));
$('#to').val($('.price_range').slider('values', 1));

$('#from').change(function () {
	var userValue = $(this).val();
	$('.price_range').slider('values', 0, userValue);
	var slideVal = $('.price_range span ');
	var slideFirstVal = slideVal.filter(':first-of-type');
	slideFirstVal.html('<i></i>');
	slideFirstVal.find('i').text($('.price_range').slider('values', 0));
});
$('#to').change(function () {
	var userValue = $(this).val();
	$('.price_range').slider('values', 1, userValue);
	var slideVal = $('.price_range span ');
	var slideLastVal = slideVal.filter(':last-of-type');
	slidestLaVal.html('<i></i>');
	slideLastVal.find('i').text($('.price_range').slider('values', 1));
});

// 사이즈 필터링

// var sizeFilter = $('.size_filter input');
// var targetList = $('.new_arrivals_list li');

// sizeFilter.click(function () {
// 	var targetValue = [];
// 	sizeFilter.filter(':checked').each(function () {
// 		targetValue.push('.' + $(this).val());
// 	});
// 	var targetClass = targetValue.join(',');
// 	targetList.hide();
// 	$(targetClass).fadeIn();
// });

// isotope 필터링

var $filters = $('.combi_filters input');
var filters = {};
var $grid = $('.new_arrivals_list').isotope({
	itemSelector: '.new_arrivals_list > li',
});

$filters.click(function (event) {
	var $button = $(this);

	var $buttonGroup = $button.parents('div');
	var filterGroup = $buttonGroup.attr('data-filter-group');

	filters[filterGroup] = $button.val();
	// combine filters
	var filterValue = concatValues(filters);
	// set filter for Isotope
	$grid.isotope({ filter: filterValue });
	if ($button.val() == '*') {
		$filters.parent('div').find('input').prop('checked', false);
		$button.prop('checked', true);
	} else {
		$filters.parent('div').find('input').eq(0).prop('checked', false);
	}
});

function concatValues(obj) {
	var value = '';
	for (var prop in obj) {
		value += obj[prop];
	}
	return value;
}
