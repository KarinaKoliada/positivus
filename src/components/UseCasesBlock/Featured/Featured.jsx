import { motion } from "framer-motion";
import GreenStar from "../../../assets/green-star.svg?react";
import { FeaturedSetting } from "./FeaturedSettings";
import ArrowBtn from "../../../assets/green-btn.svg?react";

const fadeInUp = (index) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: index * 0.2 },
});

const Featured = () => {
  return (
    <section id="featured" className="pb-[60px] md:pb-[140px]">
      <div className="px-3 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <motion.div
          {...fadeInUp(0)}
          className="flex flex-col lg:flex-row gap-10 justify-between rounded-[45px] px-10 pt-10 pb-[50px] border bg-[#191A23]"
        >
          <div className="lg:hidden w-5 h-5">
            <GreenStar className="w-5 h-5" />
          </div>
          <div className="flex flex-col gap-[25px] lg:w-1/2">
            <motion.h2
              {...fadeInUp(1)}
              className="hidden lg:block px-[7px] w-fit border border-[#B9FF66] bg-[#B9FF66] rounded-[7px]"
            >
              Featured Success Story
            </motion.h2>
            <motion.h3
              {...fadeInUp(2)}
              className="uppercase lg:hidden text-[#B9FF66] text-[26px]"
            >
              Featured
            </motion.h3>
            <motion.h3
              {...fadeInUp(3)}
              className="text-[26px] text-white lg:text-3xl"
            >
              Scaling Success for a Leading E-Commerce Brand
            </motion.h3>
            <motion.p {...fadeInUp(4)} className="text-lg text-white">
              Through a comprehensive SEO and PPC strategy, we helped this
              e-commerce brand increase visibility, drive traffic, and boost
              sales.
            </motion.p>

            <motion.div
              {...fadeInUp(5)}
              className="hidden lg:flex lg:justify-start"
            >
              <a
                href="#"
                className="group relative flex justify-start items-center gap-[15px] text-[#B9FF66] font-medium text-xl"
              >
                <ArrowBtn className="w-10 h-10 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
                <span>Read</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            {...fadeInUp(6)}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-center lg:w-1/2"
          >
            {FeaturedSetting.map(({ number, desc }, index) => (
              <motion.div
                key={number}
                {...fadeInUp(index + 7)}
                className="border gap-[10px] border-white rounded-[25px] bg-white px-7 py-[30px] shadow-[0_2px_8px_rgba(0,0,0,0.05)] transition-all duration-500 ease-in-out hover:shadow-[0_8px_20px_rgba(0,0,0,0.2)] hover:bg-[#B9FF66] cursor-pointer"
              >
                <h2 className="text-[40px] font-medium text-[#191A23]">
                  {number}
                </h2>
                <p className="text-lg">{desc}</p>
              </motion.div>
            ))}
            <motion.div
              {...fadeInUp(FeaturedSetting.length + 7)}
              className="lg:hidden flex justify-start"
            >
              <a
                href="#"
                className="group relative flex justify-start items-center gap-[15px] text-[#B9FF66] font-medium text-xl"
              >
                <ArrowBtn className="w-10 h-10 transition-transform duration-300 ease-in-out group-hover:rotate-45" />
                <span className="group-hover:underline">Read</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
