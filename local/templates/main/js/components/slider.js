const createSlider = () => {
    if(document.querySelector(".organization__slider")) {
        const swiper = new Swiper('.organization__slider', {
            direction: 'horizontal',
            loop: true,

            slidesPerView: "auto",
            spaceBetween: 0,
            centeredSlides: true,

            navigation: {
                nextEl: '.organization__slider-btn_next',
                prevEl: '.organization__slider-btn_prev',
            },
        });
    }
}

export default createSlider;