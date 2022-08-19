import styles from "../../styles/InfoPage.module.sass";
import Link from "next/link";
import Masks from "../../components/Masks";
import { useState } from "react";
import { Adapt } from "../../components/utils";
import Delivery from "../../components/Delivery";

const Info = () => {
    const [active, setActive] = useState(false);
    const [slides, setSlides] = useState(2);

    Adapt(slides, setActive, setSlides);

    return (
        <main className={styles.main__info}>
            <div className={styles.main__info_first}>
                <h1 className={styles.main__info_title}>Наша продукция</h1>
                <Link href="/">
                    <a className={styles.main__info_tohead}>На главную</a>
                </Link>
                <Masks adaptive={active} masks={true} slide={slides} />
            </div>
            <Delivery />
        </main>
    );
};

export default Info;
