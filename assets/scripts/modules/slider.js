
var images = document.querySelectorAll('.third-section__img img');
var slide = document.querySelector('#slide');
var nextBtn = document.querySelector('#nextBtn');
var prevBtn = document.querySelector('#prevBtn');

var mediumDevice = window.matchMedia( "(min-width: 768px) and (max-width: 1024px)" );
var atPhones = window.matchMedia( "(min-width: 320px) and (max-width: 480px)" );

var count = 0;
var totalImg = images.length;
//console.log(totalImg);

//add event to next button
nextBtn.addEventListener('click', function(){
    if (mediumDevice.matches) {
        if (count === totalImg-2) {
            //console.log('return medium'+ count);
            return;
        }
    }
    else if(atPhones.matches){
        if (count === totalImg-1) {
            //console.log('return phones'+ count);
            return;
        }
    }
    else{
        if (count === totalImg-3) {
            //console.log('return phones'+ count);
            return;
        }
    }
    count++;
    var size = images[0].clientWidth;
    slide.style.transition = 'transform .5s ease-in-out';
    slide.style.transform = 'translateX(' + (-size*count) + 'px)';
});


//add event to prev button
prevBtn.addEventListener('click', function(){
    if(count === 0) return;
    count--;
    var size = images[0].clientWidth;
    //console.log(size);
    slide.style.transition = 'transform .5s ease-in-out';
    slide.style.transform = 'translateX(' + (-size*count) + 'px)';
});
