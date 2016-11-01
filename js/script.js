function videoBoxinnerTopSet() {
    var videoBoxinnerTop = ($(window).height() - $('.videoBoxinner').height()) / 2;
    $('.videoBoxinner').css({
        top: videoBoxinnerTop
    });
}



/*-----------------------------------------------*/

$(document).ready(function() {
    //videoBoxinnerTopSet();

    $('.viewVideoBox').click(function() {
        $('#videoBox').fadeIn(250);
    });
    $('#close').click(function() {
        $('#videoBox').fadeOut(250);
    });
});

$(window).resize(function() {
    //videoBoxinnerTopSet();
});
