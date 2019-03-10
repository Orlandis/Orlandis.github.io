'use strict';
var shadow = document.querySelector('.shadow');
var popup = document.querySelector('.popup');
document.querySelector('.zoq a').addEventListener('click',function(){
    shadow.classList.add('open');
});

document.querySelector('.close').addEventListener('click', function(){
   shadow.classList.remove('open');
});

document.querySelector('.last_block a').addEventListener('click',function(){
    shadow.classList.add('open');
});

document.querySelector('.close').addEventListener('click', function(){
   shadow.classList.remove('open');
});

