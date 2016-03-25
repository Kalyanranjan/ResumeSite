$(document).ready(function(){

	$("#ednScroll").click(
		function scrollTo() {
			var pos = $( "#resume-edn-wrap" ).offset();
			$('html,body').animate({
				scrollTop: (pos.top - 25)
    		}, 500);
    		$("#ednScroll").addClass("nav-active");
    		$("#skillsScroll").removeClass("nav-active");
    		$("#expScroll").removeClass("nav-active");
    		$("#coursesScroll").removeClass("nav-active");
    		$("#contactScroll").removeClass("nav-active");
    		return false;
		}
	)
	$("#skillsScroll").click(
		function scrollTo() {
			var pos = $( "#resume-skills-wrap" ).offset();
			$('html,body').animate({
				scrollTop: (pos.top - 25)
    		}, 500);
    		$("#ednScroll").removeClass("nav-active");
    		$("#skillsScroll").addClass("nav-active");
    		$("#expScroll").removeClass("nav-active");
    		$("#coursesScroll").removeClass("nav-active");
    		$("#contactScroll").removeClass("nav-active");
    		return false;
		}
	)
	$("#expScroll").click(
		function scrollTo() {
			var pos = $( "#resume-exp-wrap" ).offset();
			$('html,body').animate({
				scrollTop: (pos.top - 25)
    		}, 500);
    		$("#ednScroll").removeClass("nav-active");
    		$("#skillsScroll").removeClass("nav-active");
    		$("#expScroll").addClass("nav-active");
    		$("#coursesScroll").removeClass("nav-active");
    		$("#contactScroll").removeClass("nav-active");
    		return false;
		}
	)
	$("#coursesScroll").click(
		function scrollTo() {
			var pos = $( "#resume-courses-wrap" ).offset();
			$('html,body').animate({
				scrollTop: (pos.top - 25)
    		}, 500);
    		$("#ednScroll").removeClass("nav-active");
    		$("#skillsScroll").removeClass("nav-active");
    		$("#expScroll").removeClass("nav-active");
    		$("#coursesScroll").addClass("nav-active");
    		$("#contactScroll").removeClass("nav-active");
    		return false;
		}
	)
	$("#contactScroll").click(
		function scrollTo() {
			var pos = $( "#resume-contact-wrap" ).offset();
			$('html,body').animate({
				scrollTop: (pos.top - 25)
    		}, 500);
    		$("#ednScroll").removeClass("nav-active");
    		$("#skillsScroll").removeClass("nav-active");
    		$("#expScroll").removeClass("nav-active");
    		$("#coursesScroll").removeClass("nav-active");
    		$("#contactScroll").addClass("nav-active");
    		return false;
		}
	)

});