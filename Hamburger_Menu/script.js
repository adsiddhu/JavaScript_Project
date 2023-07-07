const hamburgerIcon = document.querySelector('.Hamburger-menu-icon')
const header = document.querySelector('.header')
const closeIcon = document.querySelector('.close-icon')
const nav_link = document.querySelector('.nav-link')

hamburgerIcon.addEventListener('click', (event) => {
    event.stopPropagation()
    header.classList.add('menu-open')
})

closeIcon.addEventListener('click', (event) => {
    header.classList.remove('menu-open')
})

nav_link.addEventListener('click', (event) => {
    event.stopPropagation()
})

window.addEventListener('click', (event) => {
    header.classList.remove('menu-open')
})