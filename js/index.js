const accordionBtns = document.querySelectorAll('.accordion')

accordionBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const txt = btn.nextElementSibling
        btn.classList.toggle('active')
        txt.classList.toggle('active')
        const icon = btn.querySelector('.icon')
        icon.classList.toggle('active')
    })
})
