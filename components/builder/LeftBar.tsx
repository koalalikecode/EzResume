"use client";
import { DevTools } from "jotai-devtools";
// import IntervalHandleComponent from "@/components/shared/IntervalHandleComponent";
import Profile from "./leftbar-section/Profile";
import ProjectSection from "./leftbar-section/ProjectSection";
import SkillSection from "./leftbar-section/SkillSection";
import SocialLink from "./leftbar-section/SocialLink";
import WorkExperienceSection from "./leftbar-section/WorkExperienceSection";
import IntervalHandleComponent from "../shared/IntervalHandleComponent";
import { useEffect } from "react";
import { useInitialState } from "@/hooks/useInitialState";
import ActivitySection from "./leftbar-section/activity-section";

function LeftBar({ resume }: { resume: any }) {
  useInitialState(resume);

  return (
    <>
      <DevTools />
      <section className="w-[600px] border-r border-r-secondary px-10 py-6 flex flex-col gap-10 overflow-y-auto">
        <IntervalHandleComponent resume={resume} />
        <Profile />
        <SocialLink />
        <SkillSection />
        <WorkExperienceSection />
        <ProjectSection />
        <ActivitySection />
      </section>
    </>
  );
}

export default LeftBar;
