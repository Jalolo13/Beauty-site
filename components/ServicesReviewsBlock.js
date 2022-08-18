import Image from "next/image";
import review from "../assets/images/Отзыв 1.png";
import styles from "../styles/ServicesReviews.module.sass";

const ServicesReviewsBlock = () => {
    return <Image src={review} alt="review" />;
};

export default ServicesReviewsBlock;
