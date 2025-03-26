import ServicesCards from "../../ServicesCards/ServicesCards";
import SectionTab from "../SectionTab/SectionTab";
import { ServicesSettings, serviceTabProps } from "./ServicesSettings";

const Service = () => {
  return (
    <>
      <section id="services" className="pb-[70px] md:pb-[90px] lg:pb-[125px]">
        <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
          <SectionTab
            title={serviceTabProps.title}
            desc={serviceTabProps.desc}
            className={"pb-[40px] lg:pb-[60px] xl:pb-[80px]"}
          />
        <ServicesCards settings={ServicesSettings}/>

        </div>
      </section>
    </>
  );
};

export default Service;

