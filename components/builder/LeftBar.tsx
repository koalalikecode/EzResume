import IntervalHandleComponent from "components/shared/IntervalHandleComponent";
import Profile from "./leftbar-section/Profile";
import ProjectSection from "./leftbar-section/ProjectSection";
import SkillSection from "./leftbar-section/SkillSection";
import SocialLink from "./leftbar-section/SocialLink";
import WorkExperienceSection from "./leftbar-section/WorkExperienceSection";

function LeftBar() {
  return (
    <section className="w-[600px] border-r border-r-primary-violet px-10 py-6 flex flex-col gap-10 overflow-y-auto">
      <IntervalHandleComponent />
      <Profile />
      <SocialLink />
      <SkillSection />
      <WorkExperienceSection />
      <ProjectSection />
    </section>
  );
}

export default LeftBar;
