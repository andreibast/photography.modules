$(document).ready(function(){
    $(".category_item").click(function(){
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
                
            }, 300);
            
            var hideClass= $(".clothes_item").hasClass("hide");
            alert("the result is: " + hideClass.toString());
            
            if(hideClass==true){
                $(".hide").css("display", "none");
                //$(".clothes_item").css("display", "none");
            }

        }
    })
})