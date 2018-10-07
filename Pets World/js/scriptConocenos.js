$(document).ready(function(){
    
    var height = $(window).height();
    
    ajustesIniciales();
    
    
    function ajustesIniciales(){
        $("section#body").css({"margin-top": height - 350 + "px"});
    }
    
    
    $(document).scroll(function(){
        var scrollTop = $(this).scrollTop();
        var pixels = scrollTop / 70;
        
        if(scrollTop < height){
            $("section#general").css({
                "-webkit-filter": "blur(" + pixels + "px)",
                "background-position": "center -" + pixels * 10 + "px"
            });
        }
    });
});