const scrollPage = () => {
    // фиксация header при скролле
    const fixHeader = () => {
        const header = document.querySelector(".header");
        if(window.scrollY >= 50) {
            header.classList.add("is-fixed");
        }else {
            header.classList.remove("is-fixed");
        }
    }
    
    fixHeader();

    window.addEventListener("scroll", ()=>{
        fixHeader();
    })
}

export default scrollPage;