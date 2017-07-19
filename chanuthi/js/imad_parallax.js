var bg_0 = $("#bg_0");
var bg_1 = $("#bg_1");
var bg_2 = $("#bg_2");
var i_width = $(window).width();
var depth = 200;

var intro = $("#slider");

$(document).bind("mousemove", function(e){
	var motionSpan_0 = ((i_width/2) - e.pageX)/i_width * depth;
	var motionSpan_1 = ((i_width/2) - e.pageX)/i_width * depth * 0.6;
	var motionSpan_2 = ((i_width/2) - e.pageX)/i_width * depth * 0.2;
	var motionSpan_1_y = (e.pageY)/i_width * depth * 0.6;
	var motionSpan_2_y = (e.pageY)/i_width * depth * 0.2;
	bg_0.css("transform", "translateX(" + motionSpan_0 + "px)");
	bg_1.css("transform", "translateX(" + motionSpan_1 + "px) ");
	bg_2.css("transform", "translateX(" + motionSpan_2 + "px) ");
	// intro.css("background","url(img/back1.JPG)")
});
$(window).resize(function(){
	i_width = $(window).width();
});


// var imgArray = [
//     "url(img/back1.JPG)",
//     "url(img/img2.JPG)"],
//     curIndex = 0;
//     imgDuration = 3000;

// function slideShow() {
//     document.getElementById('slider').className += "fadeOut";
//     setTimeout(function() {
// 			intro.css("background",imgArray[curIndex]);
//         // document.getElementById('slider').src = imgArray[curIndex];
//         document.getElementById('slider').className = "";
//     },1000);
//     curIndex++;
//     if (curIndex == imgArray.length) { curIndex = 0; }
//     setTimeout(slideShow, imgDuration);
// }
// slideShow();