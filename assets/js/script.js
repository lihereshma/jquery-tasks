// lightbox function
$(document).ready(function() {  
  // Open Lightbox
  $('.gallery figure').on('click', function(e) {
    e.preventDefault();
    var currentImage = $(this).children().attr('src');
    $('html').addClass('no-scroll'); 
    $('.lightbox-opened').children().attr('src',currentImage);
    $('.lightbox-opened').css('display',"block");
  });
  // // Close Lightbox
  //   $('.cancel').on('click',function() {
  //     $('html').removeClass('no-scroll');
  //     $('.lightbox-opened').css('display',"none");
  // });
  $('.lightbox-opened').on('click', function(e) {
    e.preventDefault();
    if(!$(e.target).is('.lightbox-opened img')) {
      $('html').removeClass('no-scroll');
      $('.lightbox-opened').css('display',"none"); 
    }    
  });
});

// tab function
$(document).ready(function(){	
	$('.tabs li').on('click',function(){
    var tab_id = $(this).attr('data');
    console.log('tab_id', tab_id, this);
    $('.tabs li').removeClass('active');
		$('.content').removeClass('active');
		$(this).addClass('active');
		$('#'+tab_id).addClass('active');
	});
});

// Filter function
$(document).ready(function(){
  $('.filters li').on('click',function(){
    var selectedClass = $(this).attr("number");
    $('.filters li').removeClass('tab-active');
    $(this).addClass('tab-active');
    console.log(selectedClass);
    $(function() {
      $(".tab-content li").fadeOut(200);
		  $(".tab-content li").filter('.'+selectedClass).delay(200).fadeIn(200);
    });
  });
});

// Carousel function
$(document).ready (function() {
  $('.carousal-content').slick ({
  dots: true,
  infinite: false,
  arrows:true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  // Responsive carousel
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
  });  
});

// Slider function
$(document).ready(function(){
  var slideCount = $('.slider ul li').length;
	var slideWidth = $('.slider ul li').width();
	var slideHeight = $('.slider ul li').height();
  var sliderUlWidth = slideCount * slideWidth;
  console.log(slideCount, slideWidth, slideHeight, sliderUlWidth);
	
	$('.banner').css({ width: slideWidth, height: slideHeight });

  $('.left-arrow ').click(function () {
    $('.slider ul li:last-child').prependTo('.slider ul');
  });

  $('.right-arrow ').click(function () {
    $('.slider ul li:first-child').appendTo('.slider ul');
  });
});    