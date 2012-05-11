/* Author:
            MediaSapiens.co
*/
jQuery(function($) {
    $('.login').click(function(e){
       if(!$(this).hasClass('active'))
       {
           $(this).addClass('active');
           $('.login_data').fadeIn();
       }
        else {
           $(this).removeClass('active');
           $('.login_data').fadeOut();
       }
    });
});








