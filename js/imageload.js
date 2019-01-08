var windowSize = '';
var windowWidth = 0;
var actualSize = 0;

$(document).ready(function(){
    checkBrowserSize();
    setInterval('checkBrowserSize()', 100);
    //loadHero();
    
    $(a.mobile_menu).on('click', function(){
        var nevHeight = $("nav").height();
        var newNavHeight = $('nav div').height();
        
        if(navHeight ===0){
            $('nav').animate({'height':newNavHeight+'px'}, 500);
            $(this).addClass('selected');
        }else{
            $('nav').animate({'height':'0px'},500);
            $(this).removeClass('selected');
        }
    });
});

function loadHero(){
    if(windowSize === 'large'){
        $('nav').css('height', 'auto');
        $('#hero').load('content/hero_')
    }
}