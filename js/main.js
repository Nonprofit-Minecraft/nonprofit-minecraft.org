$(
	function () {
		$("[data-toggle='popover']").popover();
		$('[data-toggle="tooltip"]').tooltip();
	}
	
);
snow.down();
$(window).resize(function() {
	$("canvas").css("z-index","500").remove();
	snow.down();
});
$(document).ready(function() {
    $().UItoTop({ easingType: 'easeOutQuart' });
});