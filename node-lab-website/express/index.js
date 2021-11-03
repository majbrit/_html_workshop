 // Automatic Slideshow - change image every 4 seconds
 var myIndex = 0;
 carousel();

 function carousel() {
 var i;
 var x = document.getElementsByClassName("mySlides");
 for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
 }
 myIndex++;
 if (myIndex > x.length) {myIndex = 1}    
 x[myIndex-1].style.display = "block";  
 setTimeout(carousel, 4000);    
 }

 // Used to toggle the menu on small screens when clicking on the menu button
 function myFunction() {
 var x = document.getElementById("navDemo");
 if (x.className.indexOf("w3-show") == -1) {
     x.className += " w3-show";
 } else { 
     x.className = x.className.replace(" w3-show", "");
 }
 }

 // When the user clicks anywhere outside of the modal, close it
 var modal = document.getElementById('ticketModal');
 window.onclick = function(event) {
 if (event.target == modal) {
     modal.style.display = "none";
 }
 }

 //--- my functions -----
 // change header size
 var clicked = false
 var header = document.getElementById("header");
function fun() {
    if (clicked){             
        header.style.height="50px";
        console.log("header is small");
        clicked = false;
    } else {
        header.style.height="100px";
        console.log("header is big");
        clicked = true;
    }
}
// animation
var id = null;
function myMove() {
  var elem = document.getElementById("ani");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 400) {
      clearInterval(id);
    } else {
      pos++; 
      ptop = Math.sin(pos/10)*20+30;
      pleft = Math.cos(pos/10)*20+30;
      elem.style.top = ptop + 'px'; 
      elem.style.left = pleft + 'px'; 
    }
  }
}
// color change
function someColor() {
    var field = document.getElementById("aniContainer");  
    field.style.backgroundColor="#99ddff"; 
}
function colorBack() {
    var field = document.getElementById("aniContainer");  
    field.style.backgroundColor="#34b4bd"; 
}

// appear 
function appear(event) {
    var rectangle = document.getElementById("appear");
    var x = event.clientX;
    var y = event.clientY;
    rectangle.style.width="30px";
    rectangle.style.height="200px";

    rectangle.style.left=x+"px";
    console.log(x+"px");
}

// soldout
function soldout() {
    document.getElementById("soldout").innerHTML = "Sorry, still sold out!";
    console.log("soldout()");
}

