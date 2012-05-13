/* Author:
            MediaSapiens.co
*/
jQuery(function($) {
    $('.login').click(function(e){
       if(!$(this).hasClass('active'))
       {
           $(this).addClass('active');
           $('.login__section').slideDown('fast');
       }
        else {
           $(this).removeClass('active');
           $('.login__section').slideUp('fast');
       }
    });
});








