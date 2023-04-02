import { useEffect } from 'react';
import '../styles/globals.css';
require('intersection-observer');

function MyApp({ Component, pageProps }) {
  useEffect(() => {
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
}, []);

  return <Component {...pageProps} />
};

export default MyApp;
