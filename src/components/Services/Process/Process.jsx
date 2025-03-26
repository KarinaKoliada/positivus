import { motion } from "framer-motion";
import SectionTab from "../../SectionTab/SectionTab";
import { seoTabProps } from "../../Service/ServicesSettings";
import { ProcessSettings } from "./ProcessSettings";
import BlackStar from "../../../assets/black-star.svg?react";

const fadeInUp = (index) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: index * 0.2 },
});

const Process = () => {
  return (
    <section id="process" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={seoTabProps.title}
          desc={seoTabProps.desc}
          className="pb-[40px] md:pb-[85px]"
        />
        <div className="flex flex-col gap-5 md:gap-8 lg:gap-[40px]">
          {ProcessSettings.map(({ title, desc, num }, index) => (
            <motion.div
              key={index}
              className="flex lg:flew-col gap-5 rounded-[45px] px-[30px] py-[35px] lg:px-[45px] lg:py-[51px] lg:gap-[60px] border bg-[#F3F3F3] transition-shadow duration-700 hover:shadow-[5px_5px_5px_5px_#191a23]"
              {...fadeInUp(index)}
            >
              <div className="relative inline-block w-[50px] h-[50px] md:w-24 md:h-24 lg:w-32 lg:h-32">
                <BlackStar className="w-[50px] h-[50px] md:w-24 md:h-24 lg:w-32 lg:h-32 flex-shrink-0" />
                <span className="absolute text-lg md:text-3xl lg:text-6xl inset-0 flex items-center justify-center text-[#B9FF66] font-bold">
                  {num}
                </span>
              </div>
              <div className="flex flex-col items-start gap-4 lg:gap-[30px]">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
