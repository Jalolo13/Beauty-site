import Image from "next/image";
import styles from "../styles/Instructions.module.sass";
import vk from "../assets/images/vk.png";
import tiktok from "../assets/images/tiktok.png";
import wb from "../assets/images/wb.png";
import ozon from "../assets/images/ozon.png";

const Instructions = () => {
    return (
        <section className={styles.info__instructions}>
            <div className={styles.info__instruction}>
                <h4 className={styles.info__subtitle}>
                    Инструкция по применению
                </h4>
                <div></div>
            </div>
            <div className={styles.info__info}>
                <h4 className={styles.info__subtitle}>Полезная информация</h4>
                <div className={styles.info__info__inner}>
                    <h4 className={styles.info__info__title}>
                        Как получить кэшбэк ?
                    </h4>
                    <ol className={styles.info__info__list}>
                        <li>
                            Оставить отзыв на Вайлдберриес на 5 ★★★★★ к
                            приобретенной вами масочке
                        </li>
                        <li>
                            Сделать скриншот с отзывом из личного кабинета. За
                            обычный отзыв мы вернем вам 70 ₽ , за отзыв с фото
                            150 ₽
                        </li>
                        <li>Отправить нам скриншот в Whats app</li>
                    </ol>
                    <a href="#">
                        <button className={styles.info__info__btn}>
                            отправить в WA
                        </button>
                    </a>
                </div>
            </div>
            <div className={styles.info__social}>
                <h4 className={styles.info__subtitle}>Наши соц.сети</h4>
                <div className={styles.info__social__inner}>
                    <a href="#" className={styles.info__social_link}>
                        <Image src={vk} alt="vk" />
                    </a>
                    <a href="#" className={styles.info__social_link}>
                        <Image src={tiktok} alt="tiktok" />
                    </a>
                    <a href="#" className={styles.info__social_link}>
                        <Image src={wb} alt="wb" />
                    </a>
                    <a href="#" className={styles.info__social_link}>
                        <Image src={ozon} alt="ozon" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Instructions;
