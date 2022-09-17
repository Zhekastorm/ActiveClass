$(function() {
    
    /* Header fixed______________*/
    
    let header =$("#header");
    let intro =$("#intro");
    let introH= intro.innerHeight();
    let scrollPos =$(window).scrollTop();
    let menu = $("#menu");
    let btn_logo =$("#btn_logo");
    let nav = $("#nav");
    checkScroll(scrollPos, introH);
    
   /* Fixed_________________________*/
    
   $(window).on("scroll resize", function(){
       introH = intro.innerHeight();
       scrollPos = $(this).scrollTop();
       checkScroll(scrollPos, introH);
    }); 
    
    function checkScroll(scrollPos, introH){
       if (scrollPos > introH) {header.addClass("fixed");
       }
       else {header.removeClass("fixed");
       } 
    }
    
    
    /* Scroll_____________________*/
    
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        
        let blockID = $(this).data('scroll');
        let blockOffset = $(blockID).offset().top;
        
        console.log(blockOffset);
        
        nav.removeClass("show");
        
        $("html, body").animate({
            scrollTop: blockOffset - 70
        }, 1000);
    });
    
    /* Menu_______________________*/
    
    menu.on("click", function(event){
        event.preventDefault();
        
        nav.toggleClass("show")
    });
    
     /* Btn_logo_______________________*/
    
    $("[scroll]").on("click", function(event){
        event.preventDefault();
        
        $("html, body").animate({
            scrollTop: -2100
        }, 2000);
    });
    
    /* Slider_https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js */
    
    let slider = $("#reviews_slider");
    
    slider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: false,
    });
});
