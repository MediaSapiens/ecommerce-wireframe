/* Author:
            MediaSapiens.co
*/
jQuery(function($) {
    $('.login').click(function(e){
       if(!$(this).hasClass('active'))
       {
           $(this).addClass('active');
           $('.login__section').fadeIn();
       }
        else {
           $(this).removeClass('active');
           $('.login__section').fadeOut();
       }
    });
});








