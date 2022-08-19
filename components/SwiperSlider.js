import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ServicesMasterBlock from "./ServicesMasterBlock";
import ServicesReviewsBlock from "./ServicesReviewsBlock";
import MasksBlockSlide from "./MasksBlockSlide";

const SwiperSlider = ({ reviews, master, masks }) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
        >
            {reviews ? (
                <>
                    <SwiperSlide>
                        <ServicesMasterBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesMasterBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesMasterBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesMasterBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesMasterBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesMasterBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesMasterBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesMasterBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesMasterBlock />
                    </SwiperSlide>
                </>
            ) : master ? (
                <>
                    <SwiperSlide>
                        <ServicesReviewsBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesReviewsBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesReviewsBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesReviewsBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesReviewsBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesReviewsBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesReviewsBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesReviewsBlock />
                    </SwiperSlide>
                    <SwiperSlide>
                        <ServicesReviewsBlock />
                    </SwiperSlide>
                </>
            ) : masks ? (
                <>
                    <SwiperSlide>
                        <MasksBlockSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MasksBlockSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MasksBlockSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MasksBlockSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MasksBlockSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MasksBlockSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MasksBlockSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MasksBlockSlide />
                    </SwiperSlide>
                    <SwiperSlide>
                        <MasksBlockSlide />
                    </SwiperSlide>
                </>
            ) : null}
        </Swiper>
    );
};

export default SwiperSlider;
