
	jQuery(document).ready(function(){

  	var tab = localStorage.language || "Ruby"

  	jQuery('.tabs.codeblock div.tab_cont').hide();
  	jQuery('.tabs.codeblock div#'+tab).show();

  	jQuery('.tabs.codeblock ul li').removeClass('active');
  	jQuery('.tabs.codeblock ul li.'+tab).addClass('active');

		jQuery('.tabs.codeblock ul li a').click(function(){

			if (jQuery(this).parent().hasClass("active")) {return false;}

			var currentTab =  jQuery(this).parent().attr('class');
			localStorage.language = currentTab

			jQuery('.tabs.codeblock div.tab_cont').hide();
			jQuery('.tabs.codeblock div#'+currentTab).show();
			jQuery('.tabs.codeblock ul li').removeClass('active');
			jQuery('.tabs.codeblock ul li.'+currentTab).addClass('active');

  	  jQuery('html, body').animate({scrollTop: jQuery(jQuery(this)).offset().top - 100}, 200);
			return false;
		});

  	jQuery('.tabs.refblock div.tab_cont').hide();
  	jQuery('.tabs.refblock div.tab_cont.first').show();
  	jQuery('.tabs.refblock ul li').removeClass('active');
  	jQuery('.tabs.refblock ul li:first-child').addClass('active');

		jQuery('.tabs.refblock ul li a').click(function(){
			if (jQuery(this).parent().hasClass("active")) {return false;}
			var currentTabB =  jQuery(this).parent().attr('class');
			jQuery(this).parent().parent().parent().children("div.tab_cont").hide();
			jQuery(this).parent().parent().parent().children("div#"+currentTabB).show();
			jQuery(this).parent().parent().children(".active").removeClass('active');
			jQuery(this).parent().parent().children("."+currentTabB).addClass('active');
			return false;
		});
	});
