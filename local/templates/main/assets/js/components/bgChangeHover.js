const bgChangeHover = () => {
    const items = document.querySelectorAll(".real-estate-info__drop-item");
    
    if(items) {
        const bgEl = document.querySelector(".real-estate-info__bg");
        const defSrc = bgEl?.getAttribute("data-default-image");
    
        const mouseoverItem = (item) => {
            const srcImg = String(item.getAttribute("data-new-src")).trim();
            bgEl.style.backgroundImage = `url(${srcImg})`;
        }
    
        const mouseoutItem = () => {
            bgEl.style.backgroundImage = `url(${defSrc})`;
        }
        
        items.forEach(item=> {
            item.addEventListener("mouseover", ()=> mouseoverItem(item))
            item.addEventListener("mouseout", ()=>mouseoutItem());
        });
    }
}

export default bgChangeHover;