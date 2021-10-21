var imgObj = null;
var otherimgObj = null;
            
function init() {
    imgObj = document.getElementById('myImage');
    imgObj.style.position= 'relative'; 
    imgObj.style.left = '0px'; 

    otherimgObj = document.getElementById('myOtherImage');
    otherimgObj.style.position= 'relative'; 
    otherimgObj.style.right = '0px'; 
}

// Move first image to the right
function moveRight() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
}

// Move second image to the left
function moveLeft() {
    otherimgObj.style.right = parseInt(otherimgObj.style.right) + 10 + 'px';
}



window.onload = init;