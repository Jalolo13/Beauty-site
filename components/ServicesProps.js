import styles from "../styles/ServicesProps.module.sass";

import SwiperSlider from "./SwiperSlider";
import SwiperSliderAdaptive from "./SwiperSliderAdaptive";

const ServicesProps = ({
    slide,
    adaptive,
    serviceTitle,
    reviews,
    master,
    className,
}) => {
    return (
        <section className={className}>
            <h2 className={styles.title}>{serviceTitle}</h2>
            {adaptive ? (
                <div
                    className={
                        styles.services__props_swiper_block_adaptive +
                        " " +
                        styles.active
                    }
                >
                    <SwiperSliderAdaptive
                        slide={slide}
                        reviews={reviews}
                        master={master}
                    />
                </div>
            ) : (
                <div className={styles.services__props_swiper_block}>
                    <SwiperSlider reviews={reviews} master={master} />
                </div>
            )}
        </section>
    );
};

export default ServicesProps;
