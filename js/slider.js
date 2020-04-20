var next = document.getElementById('next');
var prew = document.getElementById('prew');

var slides = document.getElementsByClassName('slide');
for(var i=0; i<slides.length; i++) {
    slides[i].style.zIndex = slides.length - i;
}

next.onclick = function () {
    var activeEl = document.querySelector('.slider-active');
    if(activeEl.nextElementSibling) {
       activeEl.style.left = "-100%";
       activeEl.classList.remove('slider-active');
       activeEl.nextElementSibling.classList.add('slider-active');
       this.classList.remove('no_active');
       prew.classList.remove('no_active');
       if(!activeEl.nextElementSibling.nextElementSibling) {
          this.classList.add('no_active');
       }
    }
}
prew.onclick = function () {
    var activeEl = document.querySelector('.slider-active');
    if(activeEl.previousElementSibling) {
       activeEl.previousElementSibling.style.left = "100%";
       activeEl.classList.remove('slider-active');
       activeEl.previousElementSibling.classList.add('slider-active');
       this.classList.remove('no_active');
       next.classList.remove('no_active');
       if(!activeEl.previousElementSibling.previousElementSibling) {
          this.classList.add('no_active');
       }
    }
} 
