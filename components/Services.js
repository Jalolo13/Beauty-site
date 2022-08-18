import { useState } from "react";
import styles from "../styles/Services.module.sass";
import ServicesList from "./ServicesList";
import ServicesPrice from "./ServicesPrice";
import imagePrice from "../assets/images/priceImg.png";

import Image from "next/image";

const Services = () => {
    const arrServices = [
        {
            id: 1,
            title: "Стрижка",
            description:
                "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lorem arcu quam platea adipiscing sed lacus. Cursus mattis aenean viverra accumsan. Amet velit ac faucibus vitae. ",
            img: imagePrice,
            priceJun: 1199,
            priceMiddle: 2199,
            priceSenior: 3199,
        },
        {
            id: 2,
            title: "Укладка",
            description:
                "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lorem arcu quam platea adipiscing sed lacus. Cursus mattis aenean viverra accumsan. Amet velit ac faucibus vitae. ",
            img: imagePrice,
            priceJun: 599,
            priceMiddle: 699,
            priceSenior: 799,
        },
        {
            id: 3,
            title: "Окрашивание",
            description:
                "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lorem arcu quam platea adipiscing sed lacus. Cursus mattis aenean viverra accumsan. Amet velit ac faucibus vitae. ",
            img: imagePrice,
            priceJun: 1599,
            priceMiddle: 2599,
            priceSenior: 3599,
        },
        {
            id: 4,
            title: "Уход",
            description:
                "lLorem ipsum dolor sit amet, consectetur adipiscing elit. Non, lorem arcu quam platea adipiscing sed lacus. Cursus mattis aenean viverra accumsan. Amet velit ac faucibus vitae. ",
            img: imagePrice,
            priceJun: 2399,
            priceMiddle: 2899,
            priceSenior: 3499,
        },
    ];
    
    const [active, setActive] = useState(0);

    return (
        <section className={styles.section_services}>
            <h2 className={styles.section_services__title + " " + styles.title}>
                Услуги и цены
            </h2>
            <div className={styles.section_services__listprice}>
                <ServicesList
                    arrServices={arrServices}
                    active={active}
                    setActive={setActive}
                />
                <ServicesPrice arrServices={arrServices} active={active} />
                {arrServices.map(({ img, id }, i) => (
                    <div
                        key={id}
                        className={
                            active === i
                                ? styles.section_services__img +
                                  " " +
                                  styles.active
                                : styles.section_services__img
                        }
                    >
                        <Image src={img} alt="imgPrice" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
