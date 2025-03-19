import { motion } from "framer-motion";
import SectionTab from "../../SectionTab/SectionTab";
import { valuesTabProps } from "../../Service/ServicesSettings";
import { CoreValuesSettings } from "./CoreValuesSettings";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.2 },
  }),
};

const CoreValues = () => {
  return (
    <section id="core-values" className="mb-[60px] lg:mb-[120px]">
      <div className="w-full px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={valuesTabProps.title}
          desc={valuesTabProps.desc}
          className="mb-[40px] lg:mb-[60px] xl:mb-[80px]"
        />

        <div className="flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-20">
          {CoreValuesSettings.map(({ title, img: Img, desc }, index) => (
            <motion.div
              key={title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="flex lg:h-[330px] flex-col rounded-[45px] border-[#191a23] border shadow-[0px_5px_0px_0px_#191a23] p-10 gap-5 items-center text-center lg:flex-row lg:items-start lg:text-left transition-all duration-[600ms] ease-in-out hover:shadow-[5px_5px_5px_5px_#191a23]"
            >
              <div className="lg:flex-1">
                <h3 className="text-2xl flex justify-start items-start md:text-3xl font-medium">
                  {title}
                </h3>
                <hr className="w-full h-[2px] my-5 lg:my-10 bg-black" />
                <p className="text-base flex text-start md:text-lg">{desc}</p>
              </div>

              {Img && (
                <div className="lg:flex-1">
                  <Img className="w-full h-full" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
