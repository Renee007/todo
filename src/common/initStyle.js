export default function (type) {
	if(type==undefined||type=="fixed"){
		$("body").removeClass("layout-top-nav");
		$("body").addClass("fixed");
		$("body").addClass("sidebar-mini");
		
		$(".content-wrapper").css({
	        'min-height':$(document).height()-$(".main-footer").height()
	    });
	}
	if(type=="topNav"){
		$("body").addClass("layout-top-nav");
		$("body").removeClass("fixed");
		$("body").removeClass("sidebar-mini");

		$(".content-wrapper").css({
	        'min-height':$(document).height()-$(".main-header").height()
	    });
	}
}