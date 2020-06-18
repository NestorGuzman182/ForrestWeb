const ipad = window.matchMedia('screen and (max-width: 767px');
console.log(window.matchMedia('screen and (max-width: 767px'));


const menu = document.querySelector('.menu');
const showButton = document.querySelector('#btn-menu')
const closeButton = document.querySelector('#btn-close')



ipad.addListener(validate);

function validate (event){
    if(event.matches){
        showButton.addEventListener('click', show)
        closeButton.addEventListener('click', hide)
        console.log(event.matches)
    }else{ 
        showButton.removeEventListener('click', show)
        closeButton.removeEventListener('click', hide) 
    }
}
    validate(ipad);

function show (){
    menu.classList.add('is-active');
}
function hide(){
    menu.classList.remove('is-active')
    console.log(menu.classList)
}
