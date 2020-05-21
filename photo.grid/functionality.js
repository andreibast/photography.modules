$(document).ready(function(){ 
    $(".category_item").click(function(){
        var category = $(this).attr("id");
        if(category == "all"){
            $(".clothes_item").addClass("hide"); 
            
            setTimeout(function(){ 
                $(".clothes_item").removeClass("hide");
                $("div[style*=none]").css({'display' : ''});
            }, 1000);
               
        }else{
            $(".clothes_item").addClass("hide");
            setTimeout(function(){ 
                $("." + category).removeClass("hide");
                $("div[style*=none]").css({'display' : ''}); 
                $("div .hide").css("display", "none"); 
            }, 1000);
            
        }   
    })
})