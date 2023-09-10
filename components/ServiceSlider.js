import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxArrowTopRight,
  RxDesktop,
  RxPencil2,
  RxCamera,
  RxRocket,
  RxPencil1,
} from "react-icons/rx";

import { Pagination, FreeMode } from "swiper";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "Transforming concepts into digital solutions with expertise and innovation.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Crafting visually engaging, user-centric experiences that bring ideas to life. ",
  },
  {
    icon: <RxPencil1 />,
    title: "Illustrations",
    description:
      "Creating unique, hand-crafted visuals that tell stories and convey ideas.",
  },
  {
    icon: <RxCamera />,
    title: "Video Editing",
    description:
      "Transforming raw footage into compelling narratives with precision and creativity.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "Enhancing online visibility and driving organic traffic with strategic optimization.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 3, // Show 3 slides on xl screens
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div
              className="bg-[rgba(57,54,89,0.38)] h-max rounded-lg  px-6 py-8 flex  sm:flex-col gap-x-6 
                  sm:gap-x-0 group cursor-pointer hover:bg-[rgba(65,121,169,0.15)] transition-all duration-300"
            >
              <div className="text-4xl text-accentprimary mb-4">
                {item.icon}
              </div>

              <div className="mb-8">
                <div className="mb-2 text-lg font-semibold">{item.title}</div>
                <p className="max-w-[350px]">{item.description} </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accentprimary transition-all duration-150" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
