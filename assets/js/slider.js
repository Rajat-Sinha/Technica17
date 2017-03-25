
var imgSlide;
var gera = 0;
var pic = 0;
function startP()
{
imgSlide = document.getElementById('img');
// preload images
images = new Array();
images[0] = new Image();
images[0].src = "images/sd1.png";
images[1] = new Image();
images[1].src = "images/sd2.jpg";
images[2] = new Image();
images[2].src = "images/sd3.jpg";
images[3] = new Image();
images[3].src = "images/sd4.jpg";
images[4] = new Image();
images[4].src = "images/sd5.jpg";
slide();
}

function slide()
{
imgSlide.src = images[pic].src;
if(gera==0)
{
if(pic < 4) // images.length - 1 can be used here
{
pic++;
}
else
{
pic = 0;
}
}


timer = setTimeout(slide, 2500);
gera=0;

}
function prev()
{
if(timer)
stopSlide();
if(pic == 0)
{
pic = 4;
imgSlide.src = images[pic].src;
}
else
{
pic--;
imgSlide.src = images[pic].src;
}
}
function next()
{
if(timer)
stopSlide();
if(pic == 4)
{
pic = 0;
imgSlide.src = images[pic].src;
}
else
{
pic++;
imgSlide.src = images[pic].src;
}
}
function stopSlide()
{
	gera=1;
clearTimeout(timer);
}
