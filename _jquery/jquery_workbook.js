var removed = false;
var slided = false;
$(document).ready(function(){  
    $('#someButton').click(function(){           
        if (removed) {
            $('#someText').show(1000);
            removed = false;
            $('#someDiv').animate({  
                left: '100px',
                top: '250px',  
                opacity: '1.0',  
                height: '50px',  
                width: '50px'  
            });
        } else {
            $('#someText').hide(1000);
            removed = true;
            $('#someDiv').animate({  
                left: '250px',
                top: '250px',  
                opacity: '0.3',  
                height: '150px',  
                width: '150px'  
            });
        }
    });  
    $("#slide1").click(function(){
        if (slided) {
            $("#slide2").slideUp("slow");
            slided = false;
        } else {
            $("#slide2").slideDown("slow");
            slided = true;          
        }
    });
});  