// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Autoplay } from "swiper";

let GetSwiper = (props) => {
    return (
        <Swiper
            style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[FreeMode, Navigation, Autoplay]}
            className="mySwiper2"
        >
            {
                props.campingSiteImg.map((data, i) => {
                    return (
                        <SwiperSlide key={i}>
                            <div className="slide-img" style={{ backgroundImage: `url(${data})` }}></div>
                        </SwiperSlide>
                    );
                })
            }
        </Swiper>
    );
}

export default GetSwiper;