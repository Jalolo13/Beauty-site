import Image from "next/image";
import imgMask from "../assets/images/masks.png";
import styles from "../styles/MasksBlockSlide.module.sass";
// import Buttons from "./Buttons";

const MasksBlockSlide = () => {
    return (
        <div>
            <Image src={imgMask} alt="maskImg" />
            <div className={styles.masks_block__slide}>
                <h4>Маска розовая</h4>
                <p>2500 &#8381;</p>
                <div className={styles.masks_block__btns}>
                    <a href="#" className={styles.masks_block__btn}>
                        Купить на WB
                    </a>
                    <a href="#" className={styles.masks_block__btn}>
                        Купить на ozon
                    </a>
                </div>
            </div>
        </div>
    );
};

export default MasksBlockSlide;
