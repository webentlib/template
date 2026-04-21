/*
vars.css:
--scrollbar-width-y: 0px;
--scrollbar-width-x: 0px;
*/
(() => {
    const resizeObserver = new ResizeObserver(() => {
        const scrollbar_width_y = window.innerWidth - document.documentElement.clientWidth;
        const scrollbar_width_x = window.innerHeight - document.documentElement.clientHeight;
        document.documentElement.style.setProperty('--scrollbar-width-y', scrollbar_width_y + 'px');
        document.documentElement.style.setProperty('--scrollbar-width-x', scrollbar_width_x + 'px');
    });
    resizeObserver.observe(document.documentElement);
    resizeObserver.observe(document.body);
})()