const newsFilterSlider = () => {
    const node = {
        slider: document.querySelector(".news__slider"),
        next: ".news__slider-btn.news__slider-btn_next",
        prev: ".news__slider-btn.news__slider-btn_prev",
        containerEl: document.querySelector(".news .news-filter-container")
    }

    if(node.containerEl && node.slider) {
        // Инициализация Swiper
        const swiper = new Swiper(node.slider, {
            direction: 'horizontal',
            loop: true,

            slidesPerView: 2,
            spaceBetween: 9,

            navigation: {
                nextEl: node.next,
                prevEl: node.prev,
            },
        });

        // Инициализация MixItUp
        const mixer = mixitup(node.containerEl, {
            selectors: {
                target: '.mix'
            },
            callbacks: {
                onMixEnd: function() {
                    // Обновляем Swiper после фильтрации
                    swiper.update();
                }
            }
        });

        // Обработчик клика для фильтров
        document.querySelectorAll('.news__filter-btn').forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                mixer.filter(filterValue);
            });
        });
    }
}

export default newsFilterSlider;