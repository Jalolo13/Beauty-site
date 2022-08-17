import { useState } from "react";
import styles from "../styles/Header.module.sass";
import HeaderLinks from "./HeaderLinks";
import MainSocial from "./MainSocial";

const BurgerMenu = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        if (active) {
            setActive(false);
            document.body.style.overflow = "auto";
        } else {
            setActive(true);
            document.body.style.overflow = "hidden";
        }
    };

    return (
        <>
            <div
                className={
                    active
                        ? styles.burger_overlay + " " + styles.active
                        : styles.burger_overlay
                }
            ></div>
            <div className={styles.burger_menu} onClick={handleClick}>
                <div className={styles.burger}>
                    <span className={active ? styles.active : null}></span>
                </div>
            </div>
            <div
                className={
                    active ? styles.menu + " " + styles.active : styles.menu
                }
            >
                <HeaderLinks active={active} />
                <MainSocial active={active} />
            </div>
        </>
    );
};

export default BurgerMenu;
