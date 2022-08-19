import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import ServicesMasterBlock from "./ServicesMasterBlock";
import ServicesReviewsBlock from "./ServicesReviewsBlock";
import MasksBlockSlide from "./MasksBlockSlide";

const SwiperSliderAdaptive = ({ slide, reviews, master, masks }) => {
    return (
        <Swiper
            slidesPerView={slide}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
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

export default SwiperSliderAdaptive;
