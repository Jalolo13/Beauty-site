import styles from "../styles/OurWorks.module.sass";
import Image from "next/image";

import imageOne from "../assets/images/Фото 1.png";
import imageTwo from "../assets/images/Фото 2.png";
import imageThree from "../assets/images/Фото 3.png";
import imageFour from "../assets/images/Фото 4.png";
import imageFive from "../assets/images/Фото 5.png";
import imageSix from "../assets/images/Фото6.png";

const OurWorks = () => {
    const arrImage = [
        imageOne,
        imageTwo,
        imageThree,
        imageFour,
        imageFive,
        imageSix,
    ];
    return (
        <section className={styles.our_works}>
            <h2 className={styles.title}>Наши работы</h2>
            <p className={styles.our_works__subtitle}>
                - Больше работ у нас в{" "}
                <a href="https://instagram.com">Instagram</a>
            </p>
            <div className={styles.our_works__inner}>
                {arrImage.map((image, i) => (
                    <Image key={i} src={image} alt="img" layout="responsive" />
                ))}
            </div>
        </section>
    );
};

export default OurWorks;
