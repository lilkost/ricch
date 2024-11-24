const defaultScipts = () => {
        // кнопки в big-menu
    // сделать рефакторинг
    if(document.querySelector(".big-menu__links-list")) {
        const lists = document.querySelectorAll(".big-menu__links-list");

        lists.forEach(list=> {
            const items = list.querySelectorAll(".big-menu__links-item");

            items.forEach(item=> {
                const title = item.querySelector(".big-menu__links-item-title");

                if(!title) return;
    
                title.addEventListener("click", ()=> {
                    list.classList.toggle("is-active");
                });
            })
        });
    }

    if(document.querySelector(".footer__links-list")) {
        const lists = document.querySelectorAll(".footer__links-list");

        lists.forEach(list=> {
            const items = list.querySelectorAll(".footer__links-item");

            items.forEach(item=> {
                const title = item.querySelector(".footer__links-item-title");

                if(!title) return;
    
                title.addEventListener("click", ()=> {
                    list.classList.toggle("is-active");
                });
            })
        });
    }

    // кнопка еще на странице аналитика 
    if(document.querySelector(".analitics-articles__filter-all-btn")) {
        const parent = document.querySelector(".analitics-articles__filter");
        const btn = document.querySelector(".analitics-articles__filter-all-btn");

        btn.addEventListener("click",()=> {
            parent.classList.add("is-open");
        });
    }
}

export default defaultScipts;