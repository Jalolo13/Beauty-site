import styles from "../styles/Masks.module.sass";
import SwiperSlider from "./SwiperSlider";

const Masks = () => {
    return (
        <section className={styles.info__masks}>
            <h2>Маски</h2>
            <div></div>
            <SwiperSlider masks={true} />
        </section>
    );
};

export default Masks;
