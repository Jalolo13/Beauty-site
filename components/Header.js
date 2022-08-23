import { useEffect, useState } from "react";
import styles from "../styles/Header.module.sass";
import BurgerMenu from "./BurgerMenu";
import HeaderLinks from "./HeaderLinks";
import Link from "next/link";

const Header = () => {
    const [active, setActive] = useState(false);
    const [adaptive, setAdaptive] = useState(false);
    const [burger, setBurger] = useState(false);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.pageYOffset > 0) {
                setActive(true);
                if (document.documentElement.scrollWidth <= 1024) {
                    setAdaptive(true);
                }
            } else {
                setActive(false);
            }
        });
    }, []);
    return (
        <header
            className={
                active && adaptive
                    ? styles.header_scroll_adaptive
                    : active
                    ? styles.header_scroll
                    : styles.header
            }
        >
            <Link href="/">
                <h5 className="logo">annetka.hair</h5>
            </Link>
            <BurgerMenu burger={burger} setBurger={setBurger} />
            <HeaderLinks active={false} />
        </header>
    );
};

export default Header;
