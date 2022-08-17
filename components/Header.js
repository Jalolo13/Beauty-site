import styles from "../styles/Header.module.sass";
import BurgerMenu from "./BurgerMenu";
import HeaderLinks from "./HeaderLinks";

const Header = () => {
    return (
        <header className={styles.header}>
            <h5 className={styles.header_logo}>annetka.hair</h5>
            <BurgerMenu />
            <HeaderLinks active={false} />
        </header>
    );
};

export default Header;
