import { motion } from "framer-motion";
import { PricingSettings } from "./PricingSettings";
import Checked from "../../../assets/checked.svg?react";
import LinkBtn from "../../../LinkBtn/LinkBtn";

const fadeInUp = (index) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: index * 0.2 },
});

const Pricing = () => {
  return (
    <section id="pricing" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <div className="flex flex-col gap-[35px] text-start">
          <h1 className="text-[43px] lg:text-[89px]">Pricing</h1>
          <p className="text-base lg:text-xl">
            Elevate Your Online Presence: Competitive Pricing for Exceptional
            Results
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5 mt-10">
          {PricingSettings.map(
            (
              {
                title,
                price,
                details,
                duration,
                cardColor,
                tag,
                btnLinkBg1,
                btnLinkBg2,
                textColor,
                borderColorHover1,
                btnColorHover1,
                btnColorHover2,
                borderColorHover2,
                btnTextColor2,
                btnTextColor1,
                btnTextColorHover1,
                btnTextColorHover2,
                borderColor1,
                borderColor2,
              },
              index
            ) => (
              <motion.div
                key={price}
                {...fadeInUp(index)}
                className="border border-black flex flex-col p-6 rounded-[20px] shadow-md"
                style={{ backgroundColor: cardColor, color: textColor }}
              >
                <div className="flex justify-between mb-5">
                  <h3 className="text-2xl font-semibold">{title}</h3>
                  {tag && (
                    <span className="rounded-[33px] p-1 text-black text-base bg-[#B9FF66]">
                      {tag}
                    </span>
                  )}
                </div>
                <div className="flex items-baseline mt-3 text-lg font-medium mb-12">
                  <h3 className="text-5xl">{price}</h3>
                  <p className="text-[18px] ml-2">{duration}</p>
                </div>
                <div className="flex flex-col gap-5 mb-[45px] text-xl">
                  <LinkBtn
                    link="/"
                    className={`cursor-pointer border font-medium py-3 px-6 rounded-lg transition-all duration-300 
                    ${btnLinkBg1 === "#000" ? "bg-black" : "bg-[#B9FF66]"} 
                    ${btnTextColor1 === "#FFF" ? "text-white" : "text-black"} 
                    ${
                      borderColor1 === "#000"
                        ? "border-black"
                        : "border-[#B9FF66]"
                    } 
                    hover:${
                      btnColorHover1 === "#000" ? "bg-black" : "bg-white"
                    } 
                    hover:${
                      btnTextColorHover1 === "#000"
                        ? "text-black"
                        : "text-white"
                    } 
                    hover:${
                      borderColorHover1 === "#000"
                        ? "border-black"
                        : "border-white"
                    }`}
                    mode="noColor"
                  >
                    Get Started
                  </LinkBtn>
                  <LinkBtn
                    link="/"
                    className={`cursor-pointer border font-medium py-3 px-6 rounded-lg transition-all duration-300 
                    ${btnLinkBg2 === "#FFF" ? "bg-white" : "bg-black"} 
                    ${btnTextColor2 === "#FFF" ? "text-white" : "text-black"} 
                    ${
                      borderColor2 === "#000" ? "border-black" : "border-white"
                    } 
                    hover:${
                      btnColorHover2 === "000" ? "bg-black" : "bg-[#B9FF66]"
                    } 
                    hover:${
                      btnTextColorHover2 === "#FFF"
                        ? "text-white"
                        : "text-black"
                    } 
                    hover:${
                      borderColorHover2 === "#000"
                        ? "border-black"
                        : "border-white"
                    }`}
                    mode="noColor"
                  >
                    Request a quote
                  </LinkBtn>
                </div>
                <hr className="w-full h-[2px] bg-black" />
                <div className="mt-4 mb-6 flex flex-col text-start items-start gap-2">
                  {details.map((detail, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Checked className="w-5 h-5 min-w-5 min-h-5 text-green-500" />
                      <span className="text-lg">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
