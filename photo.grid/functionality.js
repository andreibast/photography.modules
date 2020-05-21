$(document).ready(function(){ 
    
    $(".category_item").click(function(){
        $("div[style*=none]").css({'display' : ''});
        var category = $(this).attr("id");
        
        if(category == "all"){
            $(".clothes_item").addClass("hide"); 
            setTimeout(function(){ 
                $(".clothes_item").removeClass("hide");
            }, 300);
               
        }else{
            $(".clothes_item").addClass("hide");
            
            setTimeout(function(){ 
                $("." + category).removeClass("hide");
                $("div .hide").css("display", "none"); //this is working
            }, 300);
            
        }
    })
})