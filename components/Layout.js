import Header from "./Header";
import MainSection from "./MainSection";
import Services from "./Services";
import ServicesProps from "./ServicesProps";
import "swiper/css/bundle";
import { useEffect, useState } from "react";
import OurWorks from "./OurWorks";
import Products from "./Products";
import Contacts from "./Contacts";
import Footer from "./Footer";

const Layout = () => {
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
        <div className="wrapper">
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
        </div>
    );
};

export default Layout;
