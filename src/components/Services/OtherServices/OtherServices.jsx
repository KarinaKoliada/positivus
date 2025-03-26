import {
  otherServicesTabProps,
  ServicesSettings,
} from "../../Service/ServicesSettings";
import SectionTab from "../../SectionTab/SectionTab";
import ServicesCards from "../../../ServicesCards/ServicesCards";

const OtherServices = () => {
  return (
    <section id="other-services" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={otherServicesTabProps.title}
          desc={otherServicesTabProps.desc}
          className="pb-[40px] md:pb-[85px]"
        />
        <ServicesCards settings={ServicesSettings} theme="grey" />
      </div>
    </section>
  );
};

export default OtherServices;
