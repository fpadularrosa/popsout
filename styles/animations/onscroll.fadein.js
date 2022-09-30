const onscroll_fadein = () => {// Get all the elements you want to show on scroll
    const targets = document.querySelectorAll(".js-show-on-scroll");
    const newOptions = {};

    // Callback for IntersectionObserver
    function callback(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            // Add the fadeIn class:
            entry.target.classList.add("motion-safe:animate-fadeIn");
            } else {
            // Otherwise remove the fadein class
            entry.target.classList.remove("motion-safe:animate-fadeIn");
            }
        });
    };

    const observer = new IntersectionObserver(callback, newOptions);

    // Loop through each of the target
    targets.forEach(function(target) {
        // Hide the element
        target.classList.add("opacity-0");

        // Add the element to the watcher
        observer.observe(target);
    });
}

export default onscroll_fadein;