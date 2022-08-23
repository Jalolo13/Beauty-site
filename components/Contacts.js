import styles from "../styles/Contacts.module.sass";
import MainSocial from "./MainSocial";

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.contacts__inner}>
                <div className={styles.contacts__block}>
                    <h4 className={styles.contacts__subtitle}>Адрес</h4>
                    <a
                        href="https://yandex.ru/maps/-/CCURnPVy0B"
                        className={styles.contacts__text}
                    >
                        м. Тульская, Самаринская ул. 1
                    </a>
                </div>
                <div className={styles.contacts__block}>
                    <h4 className={styles.contacts__subtitle}>Телефон</h4>
                    <a
                        className={styles.contacts__text}
                        href="tel:+79950992757"
                    >
                        +7 (995) 099-27-57
                    </a>
                </div>

                <div className={styles.contacts__block}>
                    <h4 className={styles.contacts__subtitle}>Время работы</h4>
                    <p className={styles.contacts__text}>
                        По предварительной <br />
                        записи
                    </p>
                </div>
                <div className={styles.contacts__block}>
                    <h4 className={styles.contacts__subtitle}>соц. сети</h4>

                    <MainSocial />
                </div>

                <button className={styles.contacts__btn}>записаться</button>
            </div>
            <div className={styles.contacts__how}>
                <h4 className={styles.contacts__subtitle}>Как нас найти?</h4>
                <div></div>
            </div>
            <div className={styles.contacts__map}>
                <h4 className={styles.contacts__subtitle}>Карта</h4>
                <iframe
                    src="https://yandex.ru/map-widget/v1/-/CCURnPVy0B"
                    frameBorder="1"
                    allowFullScreen="true"
                    className={styles.contacts__iframe_map}
                ></iframe>
            </div>
        </section>
    );
};

export default Contacts;
