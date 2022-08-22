import styles from "../styles/Header.module.sass";

const HeaderLinks = ({ active }) => {
    const handleScroll = (e, service) => {
        e.preventDefault();
        const services = document.querySelector(`${service}`);
        services.scrollIntoView({ block: "start", behavior: "smooth" });
    };
    return (
        <ul
            className={
                active ? styles.header_links_adaptive : styles.header_links
            }
        >
            <li
                onClick={(e) =>
                    handleScroll(e, ".Services_section_services__EBTFn")
                }
                className={
                    active ? styles.header_link_adaptive : styles.header_link
                }
            >
                <a href="" className={styles.header_link_item}>
                    Услуги
                </a>
            </li>
            <li
                onClick={(e) =>
                    handleScroll(
                        e,
                        ".ServicesProps_services_props_masters__TcfVC"
                    )
                }
                className={
                    active ? styles.header_link_adaptive : styles.header_link
                }
            >
                <a href="" className={styles.header_link_item}>
                    Мастера
                </a>
            </li>
            <li
                onClick={(e) =>
                    handleScroll(
                        e,
                        ".ServicesProps_services_props_comments__ccCbn"
                    )
                }
                className={
                    active ? styles.header_link_adaptive : styles.header_link
                }
            >
                <a href="" className={styles.header_link_item}>
                    Отзывы
                </a>
            </li>
            <li
                onClick={(e) => handleScroll(e, ".OurWorks_our_works__vf9oL")}
                className={
                    active ? styles.header_link_adaptive : styles.header_link
                }
            >
                <a href="" className={styles.header_link_item}>
                    Работы
                </a>
            </li>
            <li
                onClick={(e) => handleScroll(e, ".Contacts_contacts__bHTp7")}
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
