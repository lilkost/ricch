const scrollingSlider = () => {
    const node = document.querySelector(".history-company__slider");
    const nodeParentBg = document.querySelector(".history-company__parent-slider");
    const slides = document.querySelectorAll(".history-company__slide");

    if(!node) return; 

    gsap.registerPlugin(ScrollTrigger);

    const swiper = new Swiper(node, {
        direction: 'horizontal',
        loop: false,
        
        slidesPerView: 4.25,
        spaceBetween: 80,

        // navigation: {
        //     nextEl: '.history-company__btn.history-company__btn_next',
        //     prevEl: '.history-company__btn.history-company__btn_prev',
        // },

        breakpoints:{
            769: {
                slidesPerView: 4.25,
                spaceBetween: 80,
            },

            481: {
                slidesPerView: 2.2,
                spaceBetween: 24,
            },

            280:{
                slidesPerView: 1.2,
                spaceBetween: 16,
            }
        }
    });

    const scrollAnimated = (event) => {
        const {progress} = event;

        // bg position left
        let roundingPos = Math.round(progress * 100);
        nodeParentBg.style.backgroundPosition = `${roundingPos}% bottom`;
        // slides

        swiper.setProgress(progress, 1000)
    }
    const galleryItems = document.querySelectorAll(".history-company__slide");
    const totalSlidesWidth = Array.from(galleryItems).reduce((acc, item) => acc + item.offsetWidth, 0);

    const blockParent = document.querySelector(".history-company");
    const blockParentHeight = blockParent.clientHeight / 2;
    
    const heightSlider = document.querySelector(".history-company__parent-slider").clientHeight;

    const tlfour = gsap.timeline({
        scrollTrigger: {
            // trigger: ".history-company",
            // start: `.history-company__slider -=70%`,
            // end: `+=${totalSlidesWidth}`,
            // pin: true,
            // scrub: 0.5,
            // markers: true,
            // onUpdate: (event) => scrollAnimated(event)

            trigger: ".history-company",
            start: `.about-competencies -=${heightSlider + 30}px`,
            end: `+=${totalSlidesWidth}`,
            pin: true,
            scrub: 0.5,
            markers: true,
            onUpdate: (event) => scrollAnimated(event)
        }
    })
}

export default scrollingSlider;