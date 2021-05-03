
document.addEventListener('scroll',()=>{
    let bg = document.querySelector('header')
    bg.style.backgroundSize = `100%, 4px 4px, ${100 - window.pageYOffset /10}%`

})


