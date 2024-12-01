gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);


document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.js-nav-link');
    links.forEach(link => {
        tippy(link, {
            content: 'Перейти к секции',
        });
        link.onclick = e => {
            gsap.to(window, { duration: .7, scrollTo: `${link.getAttribute('data-href')}` });

        }
    });

    const smoother = ScrollSmoother.create({
        wrapper: "#wrapper",
        content: "#content",
        smooth: 2,
        effects: true
    });
    console.log(smoother)
});