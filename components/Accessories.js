import styles from "../styles/Accessories.module.sass";
import SwiperSlider from "./SwiperSlider";
import SwiperSliderAdaptive from "./SwiperSliderAdaptive";

const Accessories = ({ adaptive, accessories, slide }) => {
    return (
        <section className={styles.info__accessories}>
            <h2>Аксессуары</h2>
            {adaptive ? (
                <div
                    className={
                        styles.accessories_swiper_block_adaptive +
                        " " +
                        styles.active
                    }
                >
                    <SwiperSliderAdaptive
                        slide={slide}
                        accessories={accessories}
                    />
                </div>
            ) : (
                <div className={styles.accessories_swiper_block}>
                    <SwiperSlider accessories={accessories} />
                </div>
            )}
        </section>
    );
};

export default Accessories;
