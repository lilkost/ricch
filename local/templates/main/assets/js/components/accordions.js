const accordions = () => {
    // ===================================

    // =========== функционал открытия аккордионов
    // в массив прокидывается:
    // 1. Список элемнетов
    // 2. Блок на который происходит нажатие
    // 3. Активный класс
    const nodesAccordion = [
        [
            document.querySelectorAll(".header__nav-accordion"), 
            ".header__nav-accordion-top", 
            "is-active"
        ],
        [
            document.querySelectorAll(".competencies__accordion"),
            ".competencies__accordion-top",
            "is-active"
        ]
    ];
    // arr - выше описанный массив
    // isHidden - параметр который будет включать/отключать функционал открытия/скрытия блока при клике вне него, и при нажатии на esc
    const accordisonsOpen = (arr, isHidden = false) => {

        arr[0].forEach(item=> {
            const top = item.querySelector(arr[1]);

            top.addEventListener("click", ()=> {
                arr[0].forEach(i=> {
                    if(item !== i) {
                        i.classList.remove(arr[2]);
                    }
                });

                item.classList.toggle(arr[2]);
            })
        });


        if(!isHidden) return;
        // скрытие на ESC
        window.addEventListener("keydown", (event)=> {
            if(event.code === "Escape" || event.keyCode === 27 || event.key === "Escape") {
                arr[0].forEach(item=> {
                    item.classList.remove(arr[2]);
                })
            }
        });
        
        // скрытие блока при клике вне блока
        window.addEventListener("click", (event)=> {
            arr[0].forEach(item=> {
                // проверка при клике в любое место на странице
                // если корневой эл. или тот по которому было нажатие соответсвует классу аккордеона
                // тогда оставлять класс, в противном случае класс удаляется
                if(!event.target.closest(`.${item.classList[0]}`)) item.classList.remove(arr[2]);
            });
        })
    }

    nodesAccordion.forEach(arr=> accordisonsOpen(arr, true));

    // ===================================

    // =========== функционал открытия аккордионов по id
    // в массив прокидывается:
    // 1. Список элемнетов (кнопок для окрытия), блок на который происходит нажатие
    // 2. Список блоков которые будут открываться когда id кнопки === id контента
    // 3. data атрибут у кнопок
    // 4. data атрибут у контента
    const nodesAccordionForId = [
        [
            document.querySelectorAll(".services__accordion-button"),
            document.querySelectorAll(".services__accordion-list"),
            "data-id",
            "data-body-id"
        ],
        [
            document.querySelectorAll(".experience__accordion-btn"),
            document.querySelectorAll(".experience__accordion-list"),
            "data-id",
            "data-body-id"
        ],
        [
            document.querySelectorAll(".service-first__top-btn"),
            document.querySelectorAll(".service-first__body"),
            "data-id",
            "data-body-id"
        ]
    ];

    const accordionsOpenData = (arr) => {
        const [buttons, bodys, dataBtn, dataBody] = arr;
        // функция при клике на верхние кнопки
        const handleClick = (btn, dataBtn, dataBody) => {
            btn.addEventListener("click", ()=> {
                buttons.forEach(b=>b.classList.remove("is-active"));
                bodys.forEach(b=>b.classList.remove("is-active"));

                const currentDataID = String(btn.getAttribute(dataBtn));

                bodys.forEach(body=> {
                    const bodyDataID = String(body.getAttribute(dataBody));

                    if(bodyDataID === currentDataID) body.classList.add("is-active");
                });

                btn.classList.add("is-active");
            })
        }

        // клик по кнопкам
        if(buttons) {
            buttons.forEach(btn=> handleClick(btn, dataBtn, dataBody));
        }
    }

    nodesAccordionForId.forEach(arr=> accordionsOpenData(arr));

}

export default accordions;