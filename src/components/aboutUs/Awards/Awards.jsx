import { motion } from "framer-motion";
import SectionTab from "../../SectionTab/SectionTab";
import { awardTabProps } from "../../Service/ServicesSettings";
import { AwardSettings } from "./AwardsSettings";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: index * 0.3 },
  }),
};

const Awards = () => {
  return (
    <section id="awards" className="mb-[60px] lg:mb-[120px]">
      <div className="w-full px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={awardTabProps.title}
          desc={awardTabProps.desc}
          className="pb-[40px] lg:pb-[60px] xl:pb-[80px]"
        />
        <div className="grid grid-cols-2 gap-[10px] lg:flex lg:flex-row md:gap-10">
          {AwardSettings.map(({ img: Img, title, desc }, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="flex w-full items-center flex-col pb-10 border rounded-[45px] bg-[#F3F3F3] transition-shadow duration-700 ease-in-out hover:shadow-[5px_5px_5px_5px_#191a23]"
            >
              <Img className="flex justify-center items-center" />
              <div className="pl-6 pr-4 lg:px-[30px]">
                <p className="text-base font-bold md:font-semibold mb-4 flex justify-center">
                  {title}
                </p>
                <p className="text-base flex justify-start">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
