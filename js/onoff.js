$(function(){
    
    var flag=true;
    
    $("#onoff").click(function(){
        if(flag){     
              var imgname = "images/off4.jpg"
              flag=false;
         }
        
        
        else{
           var imgname = "images/on.jpg"
           flag=true;  
        }
        
        $("img").attr("src",imgname);
    });
    
   
    
    $("#btnhide").click(function(){
      $("#randomtext").hide(500);
        
        
    })
        
        
        
        
    $("#btnshow").click(function(){
        $("#randomtext").show(500);
        
    })    
        
        
       
    $("#btntoggle").click(function(){
        $("#randomtext").toggle();
        
    })  
    
    
    
     $("#btnfadein").click(function(){
        $("#box1").fadeIn();
        
    }) 
    
    
     $("#btnfadeout").click(function(){
        $("#box1").fadeOut();
        
    }) 
    
     $("#btnfadetoggle").click(function(){
        $("#box1").fadeToggle();
        
    }) 
    
});