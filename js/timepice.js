var init = {

    menyn: function(){
        
    	$('header').append($('nav').clone());
    	$('header nav').attr('id', 'mobile-nav');

         // 1. klicka hamburgare
        $('.hamburgare-icon').click(function(){
            $('#mobile-nav').toggleClass('open');
        });

        // KLICKA MOBILE MENUE LVL1
        $('#mobile-nav .lvl1 > li >a').click(function(){
            $(this).parent().toggleClass('open');
        });
    }
   
}



$(document).ready(function(){
  
   
   init.menyn();


});