const hamburge =document.querySelector('.hamburge');
const navbar = document.querySelector('ul')

hamburge.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
});

const clo = document.querySelector('cl')
clo.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
});