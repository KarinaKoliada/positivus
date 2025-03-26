import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSettings } from "./SwiperSettings";
import border from "../../assets/border.svg";
import rightArrow from "../../assets/arrow-right-swiper.svg";
import leftArrow from "../../assets/arrow-left-swiper.svg";
import bullet from "../../assets/bullet.svg";
import mobBorder from "../../assets/border-mob.svg";

const MySwiper = () => {
  return (
    <div className="bg-[#191A23] rounded-[45px] px-[30px] pt-[30px] pb-[60px] md:pt-[44px] md:pb-[46px] lg:pt-[70px] lg:pb-[58px] xl:pt-[84px] md:px-0 xl:pb-[68px] w-full mx-auto relative">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={"auto"}
        centeredSlides={true}
        loop={true}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          renderBullet: (index, className) => `
            <span class="${className} custom-bullet">
              <img src="${bullet}" alt="bullet ${index}" style="width: 18px; height: 18px;"/>
            </span>
          `,
        }}
        
      >
        {SwiperSettings.map(({ text, name, position }, index) => (
          <SwiperSlide
            key={index}
            className="md:!w-[606px] w-full flex flex-col items-center"
          >
            <div className="relative w-full flex flex-col justify-center items-center h-full mb-[20px]">
              <img
                src={border}
                alt="Border Frame"
                className="w-full object-contain hidden md:block"
              />
              <img
                src={mobBorder}
                alt="Border Frame"
                className="w-full object-contain block md:hidden"
              />
              <div className="absolute inset-0 flex justify-center items-center p-[10px] md:p-[50px] text-white text-center max-h-[80%]">
                <p className="text-[10px] leading-[13px] md:text-lg text-left">
                  {text}
                </p>
              </div>
            </div>
            <div className="mt-4 text-white mb-[60px] lg:mb-[124px] md:pl-[80px] text-left">
              <p className="text-[18px] md:text-[20px] text-[#B9FF66]">
                {name}
              </p>
              <p className="text-[16px] md:text-[18px]">{position}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-between items-center md:w-[564px] mx-auto">
        <div className="custom-prev cursor-pointer">
          <img src={leftArrow} alt="left arrow" />
        </div>

        <div className="custom-pagination flex justify-center w-[146px] h-4 gap-5"></div>

        <div className="custom-next cursor-pointer">
          <img src={rightArrow} alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default MySwiper;
