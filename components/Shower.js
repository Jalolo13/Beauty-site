import styles from "../styles/Shower.module.sass";
import SwiperSlider from "./SwiperSlider";
import SwiperSliderAdaptive from "./SwiperSliderAdaptive";

const Shower = ({ adaptive, shower, slide }) => {
    return (
        <section className={styles.info__shower}>
            <h2>Шампуни, скрабы, пилинги</h2>
            {adaptive ? (
                <div
                    className={
                        styles.shower_swiper_block_adaptive +
                        " " +
                        styles.active
                    }
                >
                    <SwiperSliderAdaptive slide={slide} shower={shower} />
                </div>
            ) : (
                <div className={styles.shower_swiper_block}>
                    <SwiperSlider shower={shower} />
                </div>
            )}
        </section>
    );
};

export default Shower;
