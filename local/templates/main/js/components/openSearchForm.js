const openSearchForm = () => {
    const node = {
        searchBtn: document.querySelector(".header__search-btn"),
        header: document.querySelector(".header")
    }

    // функция клика на кнопку, для дальнейшей работы
    const handleClick = () => {
        node.header.classList.toggle("is-search")
    }

    node.searchBtn.addEventListener("click", ()=>handleClick());
}

export default openSearchForm;