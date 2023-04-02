const onscroll_fadein = () => {
    const targets = document.querySelectorAll(".js-show-on-scroll");
    const newOptions = {};

    function callback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add("motion-safe:animate-fadeIn");
            } else {
            entry.target.classList.remove("motion-safe:animate-fadeIn");
            }
        });
    };

    const observer = new IntersectionObserver(callback, newOptions);

    targets.forEach(function(target) {
        target.classList.add("opacity-0");

        observer.observe(target);
    });
}

export default onscroll_fadein;