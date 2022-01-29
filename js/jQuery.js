$(document).ready(function () {
    $(function () {
        //Slider
        $('.bxslider').bxSlider({
            mode: 'vertical',
            speed: 1500,
            pause: 3000,
            captions: true,
            pagerType: 'short',
            slideWidth: 500,
            touchEnabled: false,
            infiniteLoop: false
        });
        $('.bx-pager').css('color', 'white');
        $('.bx-wrapper').css({ 'margin-left': 'auto', 'margin-right': 'auto' });
    });
});
