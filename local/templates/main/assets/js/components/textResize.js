const textResize = () => {
    const items = document.querySelectorAll(".text-resize");

    if(!items) return;

    const changeSize = () => {
        items.forEach(item=> {
            const textDesc = String(item.getAttribute("data-text-des")).trim();
            const textMob = String(item.getAttribute("data-text-mob")).trim();
            const size = Number(String(item.getAttribute("data-size")).trim());

            if(window.innerWidth > size) {
                item.textContent = textDesc;
            }
            else {
                item.textContent = textMob;
            }
        });
    }
    
    changeSize();

    window.addEventListener("resize", ()=>changeSize());
}

export default textResize;