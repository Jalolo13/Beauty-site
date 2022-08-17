import styles from "../styles/Header.module.sass";

const HeaderLinks = ({ active }) => {
    return (
        <ul
            className={
                active ? styles.header_links_adaptive : styles.header_links
            }
        >
            <li
                className={
                    active ? styles.header_link_adaptive : styles.header_link
                }
            >
                <a href="" className={styles.header_link_item}>
                    Услуги
                </a>
            </li>
            <li
                className={
                    active ? styles.header_link_adaptive : styles.header_link
                }
            >
                <a href="" className={styles.header_link_item}>
                    Мастера
                </a>
            </li>
            <li
                className={
                    active ? styles.header_link_adaptive : styles.header_link
                }
            >
                <a href="" className={styles.header_link_item}>
                    Отзывы
                </a>
            </li>
            <li
                className={
                    active ? styles.header_link_adaptive : styles.header_link
                }
            >
                <a href="" className={styles.header_link_item}>
                    Работы
                </a>
            </li>
            <li
                className={
                    active ? styles.header_link_adaptive : styles.header_link
                }
            >
                <a href="" className={styles.header_link_item}>
                    Контакты
                </a>
            </li>
        </ul>
    );
};

export default HeaderLinks;
