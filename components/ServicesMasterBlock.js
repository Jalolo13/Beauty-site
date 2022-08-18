import Image from "next/image";
import React from "react";
import styles from "../styles/ServicesProps.module.sass";

import imgMaster from "../assets/images/imgMaster.png";

const ServicesMasterBlock = () => {
    return (
        <div>
            <Image src={imgMaster} alt="img" />
            <div className={styles.services__props_inner}>
                <div className={styles.services__props_subtitles}>
                    <h4 className={styles.services__props_subtitle}>
                        Анна Астахова
                    </h4>
                    <span>Мастер</span>
                </div>
                <p>- Парикмахер стилист</p>
                <p>- Опыт более 5 лет</p>
            </div>
        </div>
    );
};

export default ServicesMasterBlock;
