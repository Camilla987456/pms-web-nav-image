"use strict";

var didScroll = false;
var paralaxTitles = document.querySelectorAll('.paralax-title');
var paraxTiles02 =  document.querySelectorAll('.paralax-title-2');
var paraxTiles03 =  document.querySelectorAll('.paralax-title-3');
 function scrollInProgress() {
	didScroll = true
}

function raf() {
	if(didScroll) {
        
            paralaxTitles.forEach((element, index) => {
                element.style.transform = "translateX("+ window.scrollY / 12 + "%)";
            })

            paraxTiles02.forEach((element, index) => {
                element.style.transform = "translateX("+ window.scrollY / 10 + "%)";
            })

            paraxTiles03.forEach((element, index) => {
                element.style.transform = "translateX("+ window.scrollY / 12 + "%)";
            })
            didScroll = false;
        

	}
	requestAnimationFrame(raf);
}


requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress)