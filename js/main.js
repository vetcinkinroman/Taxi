$(document).ready(function() {

    var pull = $('.navigation__toggle');
    var menu = $('.navigation ul');

    $(pull).on("click", function(e){
        e.preventDefault();
        menu.slideToggle(500);
    });

    $(window).resize(function(){
        var w = $(window).width();
        if(w > 700) {
            menu.removeAttr('style');
            pull.removeClass('navigation__toggle-button--active');
        }
    });
});