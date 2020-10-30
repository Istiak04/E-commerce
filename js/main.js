
$(document).ready(function(){
    $(".first-slick").slick({
        "dots": false,
        "arrows": false,
        "mobileFirst": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "vertical": true,
        "verticalSwiping": true,
        "autoplay": true,
        "autoplaySpeed": 2000  
});
$("#second-slider").slick({
    "dots": true,
        "arrows": false,
        "mobileFirst": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "vertical": false,
        "verticalSwiping": false,
        "autoplay": true,
        "autoplaySpeed": 2000 
})  

$(".fourth-slider").slick({   
})

$(".brand").slick({
        "dots":false,
        "arrows": true,
        "mobileFirst": true,
        "slidesToShow": 5,
        "slidesToScroll": 1,
        "vertical": false,
        "verticalSwiping": false,
        "autoplay": true,
        "autoplaySpeed": 2000,
        "responsive": [
            {
              breakpoint:200,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots:false
              }
            },
            {
                breakpoint:991,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  infinite: true,
                  dots:false
                }
              }

        ] 
});


//--------Events----------------------------------------

// ------------newsletter appear------------------------
$(window).ready(function(){
  console.log("loaded")
  $("#newsletter-overlay").fadeIn();
});

// -----close modal-------------------------------------
$(".close").click(function(){
  $("#newsletter-overlay").fadeOut();
  $('body').removeClass('stop-scrolling');
})

// // ----prevent Scroll------------------------------------
 $('body').addClass('stop-scrolling');


$('.hamburger-menu').click(function(evt){
  evt.preventDefault();
    $('.hamburger-menu').toggleClass("change");
    $(".ham").toggleClass("hide");
})

$('.ltabs-selectbox').click(function(evt){
  evt.preventDefault();
    $('.ltabs-tabs').toggleClass("ltabs-open")
})
})
