import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { StudiesSettings } from "./StudiesSettings";
import ArrowBtn from "../../assets/green-arrow.svg?react";
import { motion } from "framer-motion";

const StudiesSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, FreeMode, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        loopedSlides={StudiesSettings.length}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: true,
        }}
        speed={3000}
        navigation={true}
        className="pb-4"
      >
        {StudiesSettings.map(({ text }, index) => (
          <motion.SwiperSlide
            key={index}
            className="w-full flex gap-6"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div className="flex py-[42px] h-[265px] lg:h-auto  px-[50px] lg:py-[70px] lg:px-[60px] items-center gap-16  mb-[60px] lg:mb-[140px] rounded-[45px] bg-[#191a23]">
              <div className="gap-16 flex items-center " key={index}>
                <div className="flex flex-col items-start gap-5">
                  <p className="w-full text-base text-[#fff]">{text}</p>
                  <a
                    className="text-[#b9ff66] flex gap-4 items-center"
                    href="#"
                  >
                    Learn more
                    <ArrowBtn />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudiesSlider;
