const marqueFn = () => {
    if(!document.querySelector("marquee")) return;
    
    new Marquee('marquee', { 
        speed: 1,
        loops: true,
        process: .45// default: .5
    });
    
}

export default marqueFn;