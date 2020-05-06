document.querySelector('.menu-btn').addEventListener('click',()=>{
    document.querySelector('.menu').classList.toggle('show');
})

ScrollReveal().reveal('.encabezado .showcase');
ScrollReveal().reveal('.encabezado .news-cards', { delay: 500 });
ScrollReveal().reveal('.encabezado .cards-banner', { delay: 500 });
ScrollReveal().reveal('.encabezado .cards-bannertwo', { delay: 500 });
