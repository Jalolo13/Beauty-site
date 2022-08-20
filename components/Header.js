import { useEffect, useState } from "react";
import styles from "../styles/Header.module.sass";
import BurgerMenu from "./BurgerMenu";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
    const [active, setActive] = useState(false);
    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                setActive(true);
            } else {
                setActive(false);
            }
        });
    }, []);
    return (
        <header className={active ? styles.header_scroll : styles.header}>
            <h5 className="logo">annetka.hair</h5>
            <BurgerMenu />
            <HeaderLinks active={false} />
        </header>
    );
};

export default Header;
