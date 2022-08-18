import styles from "../styles/Products.module.sass";
import Buttons from "./Buttons";

const Products = () => {
    return (
        <section className={styles.products}>
            <div className={styles.products__inner}>
                <h2 className={styles.title}>Продукция</h2>
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
                <Buttons />
            </div>
        </section>
    );
};

export default Products;
