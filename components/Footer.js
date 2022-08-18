import styles from "../styles/Footer.module.sass";
import HeaderLinks from "./HeaderLinks";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <h5 className="logo">annetka.hair</h5>
                <HeaderLinks active={false} />
                <div>
                    <p>2014-2022</p>
                    <p>Политика конфиденциальности</p>
                </div>
            </div>
            <p>Сайт сделан: niksokolov.ru</p>
        </footer>
    );
};

export default Footer;
