
// fungsi tab

$('.sexytabs').tabs({ 
  show: { effect: "slide", direction: "left", duration: 200, easing: "easeOutBack" } ,
  hide: { effect: "slide", direction: "right", duration: 200, easing: "easeInQuad" } 
});


// fungsi agenda
(function($) {

	var tabs =  $(".tabs li a");
  
	tabs.click(function() {
		var content = this.hash.replace('/','');
		tabs.removeClass("active");
		$(this).addClass("active");
    $("#content").find('p').hide();
    $(content).fadeIn(200);
	});

})(jQuery);