$(document).ready(function(){
    $(".category_item").click(function(){
        var category = $(this).attr("id"); //"put in this variable the id of the item when i click on it"
        
        if(category == "all"){
            $(".clothes_item").addClass("hide pictures-container-grid"); //"into the clothes item selected, add me the hide class, which has the CSS properties already made"
            setTimeout(function(){ //this is to get our pictures back with transition
                $(".clothes_item").removeClass("hide");
            }, 300);
            
    
            
        }else{
            $(".clothes_item").addClass("hide pictures-container-grid");
            setTimeout(function(){ 
                $("." + category).removeClass("hide");
            }, 300);
            
            
        }
        
    })
})