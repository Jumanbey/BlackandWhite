$(function () {
    $(".rslides").responsiveSlides({

        auto: false, // Boolean: Animate automatically, true or false
        speed: 500, // Integer: Speed of the transition, in milliseconds
        timeout: 4000, // Integer: Time between slide transitions, in milliseconds
        pager: false, // Boolean: Show pager, true or false
        nav: true, // Boolean: Show navigation, true or false
        pauseControls: true, // Boolean: Pause when hovering controls, true or false
        prevText: "Previous", // String: Text for the "previous" button
        nextText: "Next", // String: Text for the "next" button
        maxwidth: "", // Integer: Max-width of the slideshow, in pixels
        navContainer: "", // Selector: Where controls should be appended to, default is after the 'ul'
        manualControls: "", // Selector: Declare custom pager navigation
        namespace: "rslides", // String: Change the default namespace used
        before: function () {}, // Function: Before callback
        after: function () {} // Function: After callback

    });
});

// Menu
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".nav-list");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("menu-show");
});