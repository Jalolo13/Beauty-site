import { useState } from "react";
import styles from "../styles/Masks.module.sass";
import SwiperSlider from "./SwiperSlider";
import SwiperSliderAdaptive from "./SwiperSliderAdaptive";

const Masks = ({ adaptive, masks, slide }) => {
    const listArr = ["Объем", "Цвет", "Наборы"];
    const [active, setActive] = useState(0);
    return (
        <section className={styles.info__masks}>
            <div className={styles.info__title_change}>
                <h2>Маски</h2>
                <ul className={styles.info__list_change}>
                    {listArr.map((item, i) => (
                        <li
                            key={i}
                            className={
                                active === i
                                    ? styles.info__list_item +
                                      " " +
                                      styles.active
                                    : styles.info__list_item
                            }
                            onClick={() => setActive(i)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
            {adaptive ? (
                <div
                    className={
                        styles.masks_swiper_block_adaptive + " " + styles.active
                    }
                >
                    <SwiperSliderAdaptive slide={slide} masks={masks} />
                </div>
            ) : (
                <div className={styles.masks_swiper_block}>
                    <SwiperSlider masks={masks} />
                </div>
            )}
        </section>
    );
};

export default Masks;
