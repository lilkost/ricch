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
    });

    const scrollAnimated = (event) => {
        const {progress} = event;

        // bg position left
        let roundingPos = Math.round(progress * 100);
        nodeParentBg.style.backgroundPosition = `${roundingPos}% bottom`;
        // slides
        console.log(event);

        swiper.setProgress(progress, 1000)
    }

    const tlfour = gsap.timeline({
        scrollTrigger: { 
            trigger: ".history-company__scrolling-block", 
            
            start: "-=15%",
            end: "+=300%",
            
            markers: true,
            pin: true,
            scrub: 0.5,

            onUpdate: (event) => scrollAnimated(event)
        }
    })
}

export default scrollingSlider;