import styles from "../styles/Contacts.module.sass";
import MainSocial from "./MainSocial";

const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.contacts__inner}>
                <div className={styles.contacts__block}>
                    <h4 className={styles.contacts__subtitle}>Адрес</h4>
                    <p className={styles.contacts__text}>
                        м. Тульская, Самаринская ул. 1
                    </p>
                </div>
                <div className={styles.contacts__block}>
                    <h4 className={styles.contacts__subtitle}>Телефон</h4>
                    <p className={styles.contacts__text}>+7 (995) 099-27-57</p>
                </div>

                <div className={styles.contacts__block}>
                    <h4 className={styles.contacts__subtitle}>Время работы</h4>
                    <p className={styles.contacts__text}>
                        по предварительной <br />
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.3271194542403!2d37.52146301590019!3d55.735445080548736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bfaa3794a45%3A0x6e485ab80c85dde!2zMTgxMiDQk9C-0LTQsCDRg9C7LiwgMSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEyMTE3MA!5e0!3m2!1sru!2skg!4v1660830225685!5m2!1sru!2skg"
                    className={styles.contacts__iframe_map}
                    allowFullScreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default Contacts;
