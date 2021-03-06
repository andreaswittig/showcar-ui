module.exports = () => {
    function handleStickies() {
        let scrollPos = $(window).scrollTop();

        Array.prototype.forEach.call($('[data-sticky]'), (stickyButton) => {
            let stickyEl = $(stickyButton);
            let id = stickyEl.attr('data-sticky');
            let undockEl = $('[data-sticky-undock="' + id + '"]');
            let dockEl = $('[data-sticky-dock="' + id + '"]');

            // if there is no dock and undock element leave sticky class
            if (undockEl.length === 0 && dockEl.length === 0) {
                stickyEl.addClass('sticky');
            }

            // get undock position
            let undockPos = 0;
            if (undockEl.length > 0) {
                undockPos = undockEl.offset().top;
            }

            // get dock position
            let dockPos = $(document).height();
            if(dockEl.length > 0) {
                dockPos = dockEl.offset().top;
            }

            // if element is within scrolling area, scroll, else don't
            if (scrollPos + $(window).height() > undockPos && scrollPos < dockPos - $(window).height() + stickyEl.height() * 1.5) {
                stickyEl.addClass('sc-sticky');
            } else {
                stickyEl.removeClass('sc-sticky');
            }
        });
    }

    handleStickies();

    window.addEventListener("deviceorientation", () => {
        handleStickies();
    });

    window.addEventListener("resize", () => {
        handleStickies();
    });

    window.addEventListener("pageSizeChanged", () => {
        handleStickies();
    });

    document.addEventListener('scroll', () => {
        handleStickies();
    });

    document.addEventListener('collapse', () => {
        handleStickies();
    });
};
