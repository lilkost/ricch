const searchOddAndEvenItems = () => {
    const node = [
        document.querySelectorAll(".analitics-articles__item")
    ];

    const sortItemAndAddClass = (arr) => {
        const arrItems = arr;
        
        if(!arrItems) return;

        arrItems.forEach((item, key)=> {
            if(key % 2 === 0) {
                item.classList.add('item-odd')
            }else {
                item.classList.add('item-even')
            }
        });
    }

    node.forEach(arr=>sortItemAndAddClass(arr));
}

export default searchOddAndEvenItems;