import Link from "next/link";
import styles from "../styles/Footer.module.sass";
import HeaderLinks from "./HeaderLinks";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__inner}>
                <Link href="/">
                    <h5 className="logo">annetka.hair</h5>
                </Link>
                <HeaderLinks active={false} />
                <div>
                    <p>2014-2022</p>
                    <a href="#">Политика конфиденциальности</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
