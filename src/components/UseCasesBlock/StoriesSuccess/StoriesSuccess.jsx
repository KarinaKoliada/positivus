import CardsGrid from "../../../CardsGrid/CardsGrid";
import SectionTab from "../../SectionTab/SectionTab";
import { allSuccessStories } from "../../Service/ServicesSettings";
import { StoriesSettings } from "./StoriesSettings";

const StoriesSuccess = () => {
  return (
    <section id="stories-success" className="pb-[60px] md:pb-[140px]">
      <div className="px-5 mx-auto md:px-[35px] lg:px-[60px] xl:px-[100px]">
        <SectionTab
          title={allSuccessStories.title}
          desc={allSuccessStories.desc}
          className="pb-[40px] md:pb-[85px]"
        />
        <CardsGrid setting={StoriesSettings} />
      </div>
    </section>
  );
};

export default StoriesSuccess;
