import SkillIcon from "@/icon/SkillIcon";
import SkillInputAccordion from "../resume-input/input-accordion/SkillInputAccordion";
import PlusIcon from "@/icon/PlusIcon";
import { useAtomValue, useSetAtom } from "jotai";
import { skillAtom } from "@/atoms";

function SkillSection() {
  const skillGroups = useAtomValue(skillAtom);
  const setSkillGroups = useSetAtom(skillAtom);

  return (
    <div>
      <div className="flex gap-2 items-center">
        <SkillIcon />
        <span className="text-2xl font-semibold">Skills</span>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        {skillGroups.map((item, index) => (
          <SkillInputAccordion index={index} key={index} />
        ))}
      </div>
      <button
        className="text-accent px-3 w-full flex hover:bg-accent-content items-center gap-1 mt-4 duration-200"
        onClick={() => {
          const temp = [
            ...skillGroups,
            {
              groupName: "",
              groupSkills: "",
            },
          ];
          setSkillGroups(temp);
        }}
      >
        <PlusIcon className="w-3 h-3" fill="#FF79C6" />
        Add Skill
      </button>
    </div>
  );
}

export default SkillSection;
