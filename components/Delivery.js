import styles from "../styles/Delivery.module.sass";

const Delivery = () => {
    return (
        <section className={styles.info__delivery}>
            <div className={styles.info__delivery__inner}>
                <h2 className={styles.title}>Маски под заказ</h2>
                <p className={styles.products__text}>
                    На сколько Вы готовы к переменам? Измените свой цвет волос
                    за 15 мин! Тонирующая маска для волос Annetka.hair с
                    кератином, витамином Е, пчелиным воском изготавливается из
                    органической профессиональной продукции Insight и
                    подбирается индивидуально. Результат - идеально ровный цвет,
                    гладкие, плотные и блестящие волосы без утяжеления!
                    Тонирующая маска для блондинок с вариантами оттенков цвета
                    блонд: пепельный, серебристый, стальной, розовый.
                </p>
                <a href="#">
                    <button className={styles.info__delivery_btn}>
                        Заказать маску
                    </button>
                </a>
            </div>
        </section>
    );
};

export default Delivery;
