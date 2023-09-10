import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow, Navigation } from "swiper";

// data
const workSlides = Array.from({ length: 37 }, (_, index) => ({
  title: "title",
  path: `/gallery/${index + 1}.jpg`,
}));

const GallerySlider = () => {
  return (
    <div className=" gallery_container w-full  py-8 h-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className=" w-[300px] h-[400px]  xl:w-[400px] xl:h-[600px] "
      >
        {workSlides.map((item, idx) => (
          <SwiperSlide key={idx} className="w-[500px] px-8 h-[600px]  ">
            <img
              src={item.path}
              alt={item.titlw}
              className="  w-[240px] h-[380px]  xl:w-[340px] xl:h-[540px] object-cover  rounded-3xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GallerySlider;
