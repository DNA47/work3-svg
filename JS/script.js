$('.scheme-item').hover(
	function(){
		$('.scheme polygon[data-id=' + $(this).data('id') + ']').attr('id', 'hover');
	},
	function(){
		$('.scheme polygon[data-id=' + $(this).data('id') + ']').attr('id', '');
	}
);	

// Клик по названию магазина - открывается подсказка.
$('.scheme-item').on('click', function(){
	$('.scheme-popup').hide();
	$('.scheme polygon').attr('class', '');

	var popup = $(this).find('.scheme-popup');
	$(popup).css('top', '-' + ($(popup).outerHeight(true) + 15) + 'px');
	$(popup).css('left', '-' + (($(popup).outerWidth(true) / 2) - ($(this).outerWidth(true) / 2)) + 'px');
	$('.scheme polygon[data-id=' + $(this).data('id') + ']').attr('class', 'active');
	$(popup).show();
});

// Клик по полигону магазина - также открывается подсказка.
$('.scheme polygon').click(function(){
	$('.scheme-popup').hide();
	$('.scheme-item[data-id=' + $(this).data('id') + ']').trigger('click');
});

// Клик вне магазинов все закрывает.
$("body").click(function(e) {
	if ($(e.target).closest(".scheme polygon, .scheme-item").length == 0) {
		$(".scheme-popup").hide();
		$('.scheme polygon').attr('class', '');
	}
});