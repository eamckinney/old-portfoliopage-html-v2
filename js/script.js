// When navbar item is clicked, go 66 pixels above the target
window.addEventListener("hashchange", function () {
        
    //window.scrollTo(window.scrollX, window.scrollY - 60);
        //behavior: 'smooth'
    //});
});

$(document).ready(function () {
    
    // Changes which button in the navbar is active when clicked
    $('.navbar li a').click(function(e) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            e.preventDefault();
        
            // Store hash
            var hash = this.hash;

            // Add smooth page scroll
            $('html, body').animate({
                scrollTop: ($(hash).offset().top - 54)
            }, 500, function(){
        
                // Add hash (#) to URL when done scrolling (default click behavior)
                //window.location.hash = hash;
            });

            $('.navbar li.active').removeClass('active');

            var $parent = $(this).parent();
            $parent.addClass('active');

        } // End if


    });


    

});