var fl=false;
$(window).load(function() {
	var w_img=1920, h_img=1280;
	var w,h;
	var fl2;
	setNew();
	function setWidth(){
		w=$(window).width();
	}
	function setHeight(){
		h=$(window).height();
	}
	function setSize(){
		if ((w/w_img) > (h/h_img)) {
			w_img_new=w+20;
			h_img_new=~~((w+20)*h_img/w_img);
		} else {
			h_img_new=h+20;	
			w_img_new=~~((h+20)*w_img/h_img);
		}
		m_top=~~(h_img_new-h)/2
		$('#bg img').css({width:w_img_new, height:h_img_new, marginTop:-m_top});
		if (w<1325) {
			$('.main').css({margin:0, float:'right'})
		} else {
			$('.main').css({margin:'0 auto', float:'none'})				
		}
		setPad();
	}
	$(window).resize(setNew);
	function setNew(){
		setWidth();
		setHeight();
		setSize();
	}
})
function setPad(){
	var h=$(window).height();
	if (fl) {h_cont=912} else {h_cont=623}
	if (h_cont<h) {
		$('.extra > .wrapper').stop().animate({paddingTop:~~(h-h_cont)/2})
	} else {
		$('.extra > .wrapper').stop().animate({paddingTop:0})
	}
}