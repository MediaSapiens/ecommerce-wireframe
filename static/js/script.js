/* Author:
 MediaSapiens.co
 */
jQuery(function ($) {
    $('.showSection').click(function (e) {
        $('header > nav > a.active').not(this).removeClass('active');
        var _section = '.' + $(this).attr('data-layer');
        if (!$(this).hasClass('active')) {
            $('.hide__section').hide();
            $(this).addClass('active');
            $(_section).slideDown('fast');
        } else {
            $(this).removeClass('active');
            $(_section).slideUp('fast');
        }
    });
    $('.carousel').carousel()
    /*$('ul.logo li ').hover(
        function () {
             $(this).addClass('active').children('ul').show();
        },
        function () {
            $(this).removeClass('active').children('ul').hide();
        }
     );*/
});








