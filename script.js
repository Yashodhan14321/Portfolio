$(document).ready(function() 
{
  var div = $("#second");
  var pos = div.position();
  var div1 = $("#fifth");
  var pos1 = div1.position();
  $(window).scroll(function() {
  	var windowpos = $(window).scrollTop();
    console.log(pos.top);
    console.log(windowpos);
    if(windowpos==0)
    {
    	$("#boat").css("transition", "transform 1s");
		$("#boat").css("transform", "rotate(0deg)");
		$("#boat").attr("src","boats/boat5.png");
		$("#boat").css("height", "42vh");
    }
    if (windowpos>840&&windowpos<1000) 
    {
		$("#boat").css("transition", "transform 1s");
		$("#boat").css("transform", "rotate(359deg)");
		$("#boat").attr("src","boats/boat6.png");
		$("#boat").css("height", "44vh");
    }
    else if(windowpos>2010 && windowpos<2300) 
    {
		$("#boat").css("transition", "transform 1s");
		//$("#boat").css("transform", "rotate(-359deg)");
		$("#boat").attr("src","boats/boat8.png");
		$("#boat").css("transform", "rotate(0deg)");
		$("#boat").css("height", "48vh");
		$("#boat").css("width", "23vh");
    }
    else if(windowpos>2680 && windowpos<3000) 
    {
		$("#boat").css("transition", "transform 1s");
		//$("#boat").css("transform", "rotate(-359deg)");
		$("#boat").attr("src","boats/boat9.png");
		$("#boat").css("transform", "rotate(359deg)");
		$("#boat").css("height", "50vh");
    }
    else if(windowpos>3380 && windowpos<3500) 
    {
		$("#boat").css("transition", "transform 1s");
		//$("#boat").css("transform", "rotate(-359deg)");
		$("#boat").attr("src","boats/boat2.png");
		$("#boat").css("transform", "rotate(0deg)");
		$("#boat").css("height", "60vh");
		$("#boat").css("width", "20vh");
    }
    else if(windowpos>4100 && windowpos<4200) 
    {
		$("#boat").css("transition", "transform 1s");
		//$("#boat").css("transform", "rotate(-359deg)");
		$("#boat").attr("src","boats/boat1.png");
		$("#boat").css("transform", "rotate(359deg)");
		$("#boat").css("height", "50vh");
		$("#boat").css("width", "18vh");
    }
    else if(windowpos>4750 && windowpos<4900) 
    {
		$("#boat").css("transition", "transform 1s");
		//$("#boat").css("transform", "rotate(-359deg)");
		$("#boat").attr("src","boats/boat3.png");
		$("#boat").css("transform", "rotate(0deg)");
		$("#boat").css("height", "50vh");
		$("#boat").css("width", "18vh");
    }
    else if(windowpos>5480) 
    {
		$("#boat").css("transition", "transform 1s");
		//$("#boat").css("transform", "rotate(-359deg)");
		$("#boat").attr("src","boats/boat4.png");
		$("#boat").css("transform", "rotate(359deg)");
		$("#boat").css("height", "48vh");
		$("#boat").css("width", "18vh");
    }
  });
});
