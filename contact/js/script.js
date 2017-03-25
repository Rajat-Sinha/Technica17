$(document).ready(function() {
	// hover
	
	$('.button1 .active, figure .act, #icons .act, .list1 span').css({opacity:0})
	
	$('.button1').hover(function(){
		$(this).find('.active').stop().animate({opacity:1})						 
	}, function(){
		$(this).find('.active').stop().animate({opacity:0})						 
	})
	
	$('figure a').hover(function(){
		$(this).parent().find('.act').stop().animate({opacity:1})						 
	}, function(){
		$(this).parent().find('.act').stop().animate({opacity:0})						 
	})
	
	$('.list1 a').hover(function(){
		$(this).parent().find('span').stop().animate({opacity:1})						 
	}, function(){
		$(this).parent().find('span').stop().animate({opacity:0})						 
	})
	
	$('#menu > li > a > span').css({opacity:0})
	
	$('#menu > li').hover(function(){
		$(this).find('span').stop().animate({opacity:1})					   
	}, function(){
		if (!$(this).hasClass('active')) {
			$(this).find('span').stop().animate({opacity:0})
		}
	})
	
	$('#icons a').hover(function(){
		$(this).find('.act').stop().animate({opacity:1})					   
	}, function(){
		$(this).find('.act').stop().animate({opacity:0})					   
	})
	
	$('ul#menu').superfish({
      delay:       600,
      animation:   {opacity:'show', height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });
	// animate button_enter
	
	/*
	// for lightbox
	$("a[data-type^='prettyPhoto']").prettyPhoto({theme:'facebook'});
	*/	
 });
$(window).load(function() {	
	
	// scroll
	$('.scroll').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle'
	})	
	
	// contact form
	$('#ContactForm').forms({
		ownerEmail:'#'
	})
	
	//content switch
	var content=$('#content'),
		nav=$('.menu');
	nav.navs({
		useHash:true,
		hoverIn:function(li){
		},
		hoverOut:function(li){
		},
		hover:true
	})	
	nav.navs(function(n, _){
		content.cont_sw(n);
		$('> ul > li> a span', nav).stop().animate({right:0, opacity:0});
		if (_.n!=-1) {
			$('> ul > li> a span', nav).eq(_.n).stop().animate({right:-20, opacity:1});
		}
		fl2=fl
		if (_.n==0) {
			$('#content').stop().animate({height:550});
			fl=false;
		} else {
			$('#content').stop().animate({height:839})
			fl=true;
		}
		if (fl2!=fl) {setPad();}
	})
	content.cont_sw({
		showFu:function(){
			var _=this					
			$.when(_.li.find('.box > div')).then(function(){	
				$.when(_.li.find('.bg_cont')).then(function(){	
					_.next.css({display:'block'}).find('.bg_cont').stop().animate({height:'100%', top:0}, function(){
						_.next.find('.box > div').stop().animate({opacity:1},600, function(){								 
							$(this).css({opacity:'none'})															   
						})																		
					});	
				});
			});
		},
		hideFu:function(){
			var _=this
			_.li.find('.box > div').stop().animate({opacity:0},600, function(){
				_.li.find('.bg_cont').stop().animate({height:0, top:420}, function(){
					_.li.css({display:'none'})
				})												  
			})
		},
		preFu:function(){
			var _=this
			_.li.css({position:'absolute', display:'none'});
		}
	})
	nav.navs(0)
})