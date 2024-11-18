const paddingTopHeader = () => {
    const blockAfter = document.querySelector(".block-after");
    const header = document.querySelector(".header");

    if(!blockAfter) return;

    const headerHeigh = header.clientHeight;

    blockAfter.style = `--top-header: ${headerHeigh}px;`
}

export default paddingTopHeader;