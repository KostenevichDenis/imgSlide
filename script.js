const slides = document.querySelectorAll('.slide');
let activeEl = null
slides.forEach((element, index) => {
    element.addEventListener('click', (event) => {
        activeEl!=null? slides[activeEl].classList.remove('active') : null
        event.target.classList.add('active')
        activeEl = index
    })
});