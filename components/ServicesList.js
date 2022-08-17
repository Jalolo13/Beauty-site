import styles from "../styles/ServicesList.module.sass";

const ServicesList = ({
    setClassName,
    className,
    active,
    arrServices,
    setActive,
}) => {
    const handleClick = (i) => {
        if (active === i) {
            setClassName(true);
        }
        setActive(i);
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

            <ul className={styles.services_list_adaptive}>
                {arrServices.map(({ id, title }, i) => (
                    <div key={id}>
                        <li
                            className={
                                active === i
                                    ? styles.services_list_item_adaptive +
                                      " " +
                                      styles.active
                                    : styles.services_list_item_adaptive
                            }
                            key={id}
                            onClick={() => handleClick(i)}
                        >
                            {title}
                        </li>
                    </div>
                ))}
            </ul>
        </>
    );
};

export default ServicesList;
