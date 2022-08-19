import styles from "../../styles/InfoPage.module.sass";
import Link from "next/link";
import Masks from "../../components/Masks";

const Info = () => {
    return (
        <main className={styles.main__info}>
            <div className={styles.main__info_first}>
                <h1 className={styles.main__info_title}>Наша продукция</h1>
                <Link href="/">
                    <a className={styles.main__info_tohead}>На главную</a>
                </Link>
                <Masks />
            </div>
        </main>
    );
};

export default Info;
