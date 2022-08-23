import styles from "../styles/ServicesPrice.module.sass";

const ServicesPrice = ({ arrServices, active }) => {
    return (
        <div className={styles.section_services__prices}>
            {arrServices.map(
                (
                    {
                        title,
                        description,
                        id,
                        priceJun,
                        priceMiddle,
                        priceSenior,
                    },
                    i
                ) => (
                    <div
                        key={id}
                        className={
                            active === i
                                ? styles.section_services__all +
                                  " " +
                                  styles.active
                                : styles.section_services__all
                        }
                    >
                        <div className={styles.section_services__inner}>
                            <h4
                                className={
                                    styles.section_services__prices_title
                                }
                            >
                                {title}
                            </h4>
                            <p className={styles.section_services__prices_text}>
                                {description}
                            </p>
                            <div className={styles.section_services__price}>
                                <span>{title} у стажёра</span>
                                <span>{priceJun} &#8381;</span>
                            </div>
                            <div className={styles.section_services__price}>
                                <span>{title} у мастера</span>
                                <span>{priceMiddle} &#8381;</span>
                            </div>
                            <div className={styles.section_services__price}>
                                <span>{title} у профи</span>
                                <span>{priceSenior} &#8381;</span>
                            </div>
                            <div className={styles.services_prices_btns}>
                                <button
                                    className={
                                        styles.services_prices_btn_first +
                                        " " +
                                        styles.services_prices_btn
                                    }
                                >
                                    Записаться
                                </button>
                                <button
                                    className={
                                        styles.services_prices_btn_second +
                                        " " +
                                        styles.services_prices_btn
                                    }
                                >
                                    Наши мастера
                                </button>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default ServicesPrice;
