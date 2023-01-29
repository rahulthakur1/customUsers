(($) => {

	'use strict';

	$(document).ready(function () {
		/*--- popup js start -----*/
		$(document).on("click",".cu_popup_cross",function () {
				//$('.cu_side_popup').removeClass('cu_side_popup_open');
				/* let p = $(this).data("close_popup"); */
				$(this).parents(".cu_popup_wrapper").removeClass('cu_popup_open');
			}
		);	
		$(document).on("click", ".cu_popup_btn", function (e) {
			e.preventDefault();
			let o = "." + $(this).data("main_popup");
			let p = $(this).data("open_popup");
			$(o).addClass(p);
		});
		/*--- popup js end -----*/
		
	});
	

})(jQuery);