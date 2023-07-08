$(function(){
    var header = $("#header");
    var header_innner = $("#header_inner")
    var btn__logo = $("#btn__logo")
    var container = $("#container")
    var nav = $("#nav")
    var menu = $("#menu")
    var burger = $("#burger")
    var introH;
    var scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        introH = header_innner.innerHeight();
        scrollPos = $(this).scrollTop()

        if (scrollPos > introH){
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    });

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var ElemId = $(this).data('scroll')
        var ElemOffset = $(ElemId).offset().top;

        nav.removeClass("show");
        burger.removeClass("black")
        container.removeClass("white")

        $("html, body").animate({
            scrollTop: ElemOffset - 90
        }, 1000)
    });

    $("[scroll]").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: -2000
        }, 2000)
    });

    menu.on("click", function(event){
        event.preventDefault();
            nav.toggleClass("show")
            burger.toggleClass("black")
            container.toggleClass("white")
            
    });

    var slider = $("#slider")
    slider.slick({
        dots: true,
        arrows: false, 

    });

});

