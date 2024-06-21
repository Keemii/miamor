$(document).ready(function() {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");

        // Show the popup after the animation completes
        setTimeout(function() {
            $('#popup').css('display', 'flex');
        }, 3000); // Adjust the timeout to match the animation duration
    }

    function close() {
        envelope.addClass("close")
            .removeClass("open");
        $('#popup').css('display', 'none');
    }

    // Close the popup when the user clicks on <span> (x)
    $('.close-btn').click(function() {
        $('#popup').css('display', 'none');
    });

    // Close the popup when the user clicks anywhere outside of the popup
    $(window).click(function(event) {
        if ($(event.target).is('#popup')) {
            $('#popup').css('display', 'none');
        }
    });
});
