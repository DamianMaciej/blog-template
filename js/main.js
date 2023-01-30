const toggleMenu = document.querySelector('.toggle-menu')
const dropdowns = document.querySelectorAll('.dropdown')

toggleMenu.addEventListener('click', () => {
    for (const dropdown of dropdowns) {
        dropdown.classList.toggle('active')
    }
})


var swiper = new Swiper(".slide-content", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});