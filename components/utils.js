import { useEffect } from "react";

export const Adapt = (slides, setActive, setSlides) => {
    useEffect(() => {
        const width = document.documentElement.scrollWidth;
        if (width <= 1024) {
            setActive(true);
        } else if (width >= 1024) {
            setActive(false);
        }

        if (width <= 550) {
            setSlides(1);
            console.log(slides);
        } else if (width >= 550) {
            setSlides(2);
            console.log(slides);
        }
    }, []);
};
