import styles from "../styles/MainSection.module.sass";
import phone from "../assets/images/phone.png";
import bgAdaptive from "../assets/images/bg adaptive.png";
import Image from "next/image";
import MainSocial from "./MainSocial";

const MainSection = () => {
    return (
        <section className={styles.main_section}>
            <div className={styles.main_section__inner}>
                <MainSocial active={false} />
                <div className={styles.main_section__p}>
                    <div>
                        <hr
                            style={{
                                height: "1px",
                                width: "22px",
                                border: "none",
                                background: "#fff",
                                opacity: ".6",
                                margin: "0",
                            }}
                        />
                        <p className={styles.main_section__beauty}>
                            Салон красоты премиум класса
                        </p>
                    </div>
                    <h1 className={styles.main_section_title}>Annetka.Hair</h1>
                    <p className={styles.main_section_subtitle}>
                        Annetka Hair - эксклюзивный салон красоты премиум
                        <br />
                        класса, основная миссия которого - подарить Вам
                        <br />
                        красивые волосы
                    </p>
                    <div className={styles.main_section_btns}>
                        <button
                            className={
                                styles.main_section_btn_first +
                                " " +
                                styles.main_section_btn
                            }
                        >
                            Записаться
                        </button>
                        <button
                            className={
                                styles.main_section_btn_second +
                                " " +
                                styles.main_section_btn
                            }
                        >
                            Наши услуги
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.main_section_contacts}>
                <span style={{ float: "left", opacity: ".6" }}>
                    м. Тульская, Самаринская ул. 1
                </span>
                <a
                    href="tel:+79950992757"
                    className={styles.main_section_contacts_phone}
                >
                    {" "}
                    +7 (995) 099-27-57
                </a>
                <a
                    href="tel:+79950992757"
                    className={styles.main_section_contacts_phone_img}
                >
                    <Image src={phone} alt="phone" layout="intrinsic" />
                </a>
            </div>
            <div className={styles.main_section_bg_adaptive}>
                <Image src={bgAdaptive} alt="bg" layout="responsive" />
            </div>
        </section>
    );
};

export default MainSection;
