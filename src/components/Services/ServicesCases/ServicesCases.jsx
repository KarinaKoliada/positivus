import UseCases from "../../../UseCases/UseCases";
import SectionTab from "../../SectionTab/SectionTab";
import { useCaseTabProps } from "../../Service/ServicesSettings";
import UseCasesSlider from "../../../UseCases/UseCasesSlider";
import { ServicesCasesSettings } from "./ServicesCasesSettings";

const ServicesCases = () => {
  return (
    <section id="services-cases" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={useCaseTabProps.title}
          desc={useCaseTabProps.desc}
          className="pb-[40px] md:pb-[85px]"
        />
        <UseCases setting={ServicesCasesSettings} className={"h-80"}/>
        <div className="block lg:hidden">
          <UseCasesSlider
            setting={ServicesCasesSettings}
            className={"h-[380px] md:h-72"}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesCases;
