

$(function () {
    
    
    $(".menu").on('click',function(){
        
       $("nav").animate({ marginRight: "0%" } ); 

    });
    
    $(".exit").click( function(){
        
        $("nav").animate({ marginRight: "-60%" } ); 
        
    });
    
    
})