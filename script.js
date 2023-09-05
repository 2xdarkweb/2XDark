const hamburge =document.querySelector('.hamburge');
const navbar = document.querySelector('ul')

hamburge.addEventListener('click',()=>{
    navbar.classList.toggle('slide');
});