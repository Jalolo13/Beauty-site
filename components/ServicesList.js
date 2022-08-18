import { useEffect, useState } from "react";
import styles from "../styles/ServicesList.module.sass";

const ServicesList = ({ active, arrServices, setActive }) => {
    const [sort, setSort] = useState(0);
    const [popup, setPopup] = useState(false);
    const [adaptive, setAdaptive] = useState(false);
    const [sortItem, setSortItem] = useState("Стрижка");

    useEffect(() => {
        if (document.documentElement.scrollWidth <= 425) {
            setAdaptive(true);
        } else {
            setAdaptive(false);
        }
    }, []);

    const handleSort = (item, index) => {
        setSortItem(item);
        setSort(index);
        setActive(index);
    };

    const handlePopup = () => {
        setPopup((prevState) => !prevState);
    };
    return (
        <>
            <ul className={styles.services_list}>
                {arrServices.map(({ title, id }, i) => (
                    <>
                        <div>
                            <li
                                key={id}
                                onClick={() => setActive(i)}
                                className={
                                    active === i
                                        ? styles.services_list_item +
                                          " " +
                                          styles.active
                                        : styles.services_list_item
                                }
                            >
                                {title}
                            </li>
                            <button
                                className={
                                    active === i
                                        ? styles.services_btn_plus +
                                          " " +
                                          styles.active
                                        : styles.services_btn_plus
                                }
                            >
                                +
                            </button>
                        </div>
                    </>
                ))}
            </ul>

            <div
                onClick={handlePopup}
                className={
                    adaptive
                        ? styles.services__list_popup + " " + styles.active
                        : styles.services__list_popup
                }
            >
                <div className={styles.services__popup_span}>
                    <span>{sortItem}</span>
                    <svg
                        style={{ marginRight: "15px" }}
                        width="11"
                        height="9"
                        viewBox="0 0 11 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6.36603 8.5C5.98113 9.16667 5.01887 9.16667 4.63397 8.5L0.736859 1.75C0.351959 1.08333 0.833085 0.25 1.60289 0.25L9.39711 0.25C10.1669 0.25 10.648 1.08333 10.2631 1.75L6.36603 8.5Z"
                            fill="#D9D9D9"
                        />
                    </svg>
                </div>
                <div
                    className={
                        popup
                            ? styles.services__popup + " " + styles.active
                            : styles.services__popup
                    }
                >
                    <ul className={styles.services_list_adaptive}>
                        {arrServices.map(({ id, title }, i) => (
                            <li
                                className={
                                    sort === i && active === i
                                        ? styles.services_list_item_adaptive +
                                          " " +
                                          styles.active
                                        : styles.services_list_item_adaptive
                                }
                                key={id}
                                onClick={() => handleSort(title, i)}
                            >
                                {title}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ServicesList;
