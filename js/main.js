$(document).ready(function () {




    // video popup

    $('.venobox').venobox();

    // team slider js

    $('.team_slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    //  work slider js

    $('.work_slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        centerPadding: "0",
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    }
  ]
    });

    // sticky top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".sticky_top").addClass("menu_bg");
        } else {
            $(".sticky_top").removeClass("menu_bg");
        }
    });


    // Smooths scrolling
    $('body').scrollspy({
        target: ".navbar",
        offset: 50
    });

    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 45
                }, 1500);
                return false;
            }
        }
    });

    //animation scroll js
    var html_body = $('html, body');
    $('.banner_text a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 1500);
                return false;
            }
        }
    });

    // wow js

    new WOW().init();

    // typed  js

    $(".typed").typed({
        strings: ["WEB DESIGNER", "WEB DEVELOPER", "GRAPHICS DESIGNER", "ANDROID DEVELOPER", "IOS DEVELOPER"],
        // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
        stringsElement: null,
        // typing speed
        typeSpeed: 40,
        // time before typing starts
        startDelay: 1200,
        // backspacing speed
        backSpeed: 40,
        // time before backspacing
        backDelay: 500,
        // loop
        loop: true,
        // false = infinite
        loopCount: 100,
        // show cursor
        showCursor: false,
        // character for cursor
        cursorChar: "|",
        // attribute to type (null == text)
        attr: null,
        // either html or text
        contentType: 'html',
        // call when done callback function
        callback: function () {},
        // starting callback function before each string
        preStringTyped: function () {},
        //callback for every typed string
        onStringTyped: function () {},
        // callback for reset
        resetCallback: function () {}
    });

    // scroll to top js

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".scroll_to_top").fadeIn();
        } else {
            $(".scroll_to_top").fadeOut();
        }
    });

    $(".scroll_to_top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });

    // preloader js

    $(window).on("load", function () {
        $(".loading-wrapper").delay(2000).fadeOut(500);
    });

    // responsive menu js
    
    $(".openNav").click(function(){
        $(".mobile_menu_overlay").css("transform", "scaleX(1)");
        $(".openNav").hide();
    });
    
    $(".closeNav").click(function(){
        $(".mobile_menu_overlay").css("transform", "scaleX(0)");
        $(".openNav").show();
    });
    
    $(".mobile_menu_overlay .overlay_top a img").click(function(){
        $(".mobile_menu_overlay").css("transform", "scaleX(0)");
        $(".openNav").show();
    });
    
    $(".mobile_menu_overlay .overlay_content ul li a").click(function(){
        $(".mobile_menu_overlay").css("transform", "scaleX(0)");
        $(".openNav").show();
    });


    


});1
