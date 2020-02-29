window.addEventListener("hashchange", function () {
    window.scrollTo(window.scrollX, window.scrollY - 66);
});

$(document).ready(function () {
    $('.navbar li a').click(function(e) {

        $('.navbar li.active').removeClass('active');

        var $parent = $(this).parent();
        $parent.addClass('active');
        //e.preventDefault();
    });
});