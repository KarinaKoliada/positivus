import FreeProposal from "../../FreeProposal/FreeProposal";
import Illustration from "../../assets/case-studies-Illustration.svg";
const CaseStudies = () => {
  return (
    <section id="case-studies" className="flex scroll-mt-5 items-center">
      <FreeProposal
        title="Let`s make things happen"
        picture={Illustration}
        className="bg-[#f3f3f3]"
      />
    </section>
  );
};

export default CaseStudies;
