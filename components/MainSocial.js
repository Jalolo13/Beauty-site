import styles from "../styles/MainSection.module.sass";

const MainSocial = ({ active }) => {
    return (
        <ul
            className={
                active
                    ? styles.main_section_social_adaptive
                    : styles.main_section_social
            }
        >
            <li
                className={
                    active
                        ? styles.main_section_social_link_adaptive
                        : styles.main_section_social_link
                }
            >
                <a href="https://instagram.com">IN</a>
            </li>
            <li
                className={
                    active
                        ? styles.main_section_social_link_adaptive
                        : styles.main_section_social_link
                }
            >
                <a href="https://instagram.com">VK</a>
            </li>
            <li
                className={
                    active
                        ? styles.main_section_social_link_adaptive
                        : styles.main_section_social_link
                }
            >
                <a href="https://instagram.com">FC</a>
            </li>
        </ul>
    );
};

export default MainSocial;
