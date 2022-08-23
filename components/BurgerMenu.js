import styles from "../styles/Header.module.sass";
import HeaderLinks from "./HeaderLinks";
import MainSocial from "./MainSocial";

const BurgerMenu = ({ burger, setBurger }) => {
    const handleClick = () => {
        if (burger) {
            setBurger(false);
        } else {
            setBurger(true);
        }
    };

    return (
        <>
            <div
                className={
                    burger
                        ? styles.burger_overlay + " " + styles.active
                        : styles.burger_overlay
                }
            ></div>
            <div className={styles.burger_menu} onClick={handleClick}>
                <div className={styles.burger}>
                    <span className={burger ? styles.active : null}></span>
                </div>
            </div>
            <div
                className={
                    burger ? styles.menu + " " + styles.active : styles.menu
                }
            >
                <HeaderLinks active={burger} setBurger={setBurger}/>
                <MainSocial active={burger} />
            </div>
        </>
    );
};

export default BurgerMenu;
