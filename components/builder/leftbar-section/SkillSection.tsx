import SkillIcon from "@/icon/SkillIcon";
import SkillInputAccordion from "../resume-input/input-accordion/SkillInputAccordion";
import PlusIcon from "@/icon/PlusIcon";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { resumeSectionGroupAdded } from "redux/resumesSlice";
// import { useParams } from "react-router";

function SkillSection() {
  // const dispatch = useAppDispatch();
  // const { resumeId } = useParams();
  // const skillsGroups = useAppSelector(
  //   (state) => state.resumes[resumeId].data.skills
  // );
  return (
    <div>
      <div className="flex gap-2 items-center">
        <SkillIcon />
        <span className="text-2xl font-semibold">Skills</span>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        <SkillInputAccordion index={1} />
      </div>
      <button
        className="text-accent px-3 w-full flex hover:bg-accent-content items-center gap-1 mt-4 duration-200"
        onClick={
          () => {}
          // dispatch(
          //   resumeSectionGroupAdded({
          //     value: {
          //       groupName: "",
          //       groupSkills: "",
          //     },
          //     path: resumeId + ".data.skills",
          //   })
          // )
        }
      >
        <PlusIcon className="w-3 h-3" fill="#FF79C6" />
        Add Skill
      </button>
    </div>
  );
}

export default SkillSection;
