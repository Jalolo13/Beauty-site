import Header from "../components/Header";
import MainSection from "../components/MainSection";
import Services from "../components/Services";
import ServicesProps from "../components/ServicesProps";
import OurWorks from "../components/OurWorks";
import Products from "../components/Products";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";

import { useState } from "react";
import { Adapt } from "../components/utils";

const Home = () => {
    const [active, setActive] = useState(false);
    const [slides, setSlides] = useState(2);

    Adapt(slides, setActive, setSlides);
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
