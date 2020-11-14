let cardHover = document.querySelector(".comic-card"); 
let cardHover1 = document.querySelector(".thumbnail"); 
let scroll = document.querySelector(".scroll");
let comicInfo = document.querySelector('.comic-info');


cardHover.addEventListener('mouseenter', () => {
    comicInfo.classList.toggle('active')
    cardHover.classList.toggle('active')
    scroll.classList.toggle('inactive')

})

cardHover.addEventListener('mouseleave', () => {
    comicInfo.classList.toggle('inactive')
    cardHover.classList.toggle('inactive')
    scroll.classList.toggle('active')

})