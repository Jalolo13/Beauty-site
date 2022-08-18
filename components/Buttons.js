import styles from "../styles/ButtonsLink.module.sass";

const Buttons = () => {
    return (
        <div>
            <a href="#" className={styles.buttons__link_first}>
                Купить на Ozon
            </a>
            <a href="#" className={styles.buttons__link_second}>
                Купить на wildberries
            </a>
        </div>
    );
};

export default Buttons;
