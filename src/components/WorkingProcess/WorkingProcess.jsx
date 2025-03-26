import { motion } from "framer-motion";
import { WorkSettings } from "./WorkSettings";
import SectionTab from "../SectionTab/SectionTab";
import { workingTabProps } from "../Service/ServicesSettings";
import Accordion from "../../Accordion/Accordion";

const WorkingProcess = () => {
  return (
    <section id="working-process" className="scroll-mt-5">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={workingTabProps.title}
          desc={workingTabProps.desc}
          parts={workingTabProps.parts}
          className="pb-8 md:pb-10 lg:pb-16 xl:pb-[80px]"
        />

        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.7 },
            },
          }}
          className="flex flex-col gap-5 md:gap-[30px] mb-[60px] md:mb-[100px] lg:mb-[140px]"
        >
          {WorkSettings.map(({ title, text }, index) => (
            <Accordion
              position={`0${index + 1}`}
              text={text}
              key={index}
              title={title}
              className="h-[320px]"
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default WorkingProcess;
