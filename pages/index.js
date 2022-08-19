import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Services from "../components/Services";
import ServicesProps from "../components/ServicesProps";
import OurWorks from "../components/OurWorks";
import Products from "../components/Products";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

import { useEffect, useState } from "react";

const Home = () => {
    const [active, setActive] = useState(false);
    const [slides, setSlides] = useState(2);
    useEffect(() => {
        const width = document.documentElement.scrollWidth;
        if (width <= 1024) {
            setActive(true);
        } else if (width >= 1024) {
            setActive(false);
        }

        if (width <= 425) {
            setSlides(1);
            console.log(slides);
        } else if (width >= 425) {
            setSlides(2);
            console.log(slides);
        }
    }, []);
    return (
        <>
            <Header />
            <main>
                <MainSection />
                <Services />
                <ServicesProps
                    slide={slides}
                    adaptive={active}
                    serviceTitle={"Мастера"}
                    reviews={true}
                    master={false}
                />
                <ServicesProps
                    slide={slides}
                    adaptive={active}
                    serviceTitle={"Отзывы клиентов"}
                    reviews={false}
                    master={true}
                />
                <OurWorks />
                <Products />
                <Contacts />
            </main>
            <Footer />
        </>
    );
};

export default Home;
