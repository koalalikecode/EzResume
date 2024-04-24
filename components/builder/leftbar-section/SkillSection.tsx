import SkillIcon from "@/icon/SkillIcon";
import PlusIcon from "@/icon/PlusIcon";
import { useAtomValue, useSetAtom } from "jotai";
import { skillAtom } from "@/atoms";
import InputAccordion from "../resume-input/input-accordion";
import { removeResumeSectionGroup, updateResumeInput } from "@/atoms/actions";
import ResumeInput from "../resume-input/ResumeInput";

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
          <InputAccordion
            id={`skill-${index}`}
            key={`skill-${index}`}
            handleDelete={() => {
              setSkillGroups(removeResumeSectionGroup(skillGroups, index));
            }}
            title={item.groupName || "Untitled Skills Group"}
          >
            <div className="flex gap-2 items-center">
              <ResumeInput
                title="Group name"
                htmlFor={`skill-group-${index}`}
                value={item.groupName}
                onChange={(e: any) => {
                  const temp = updateResumeInput(
                    skillGroups,
                    e.target.value,
                    `[${index}].groupName`
                  );
                  setSkillGroups(temp);
                }}
              />
              <ResumeInput
                title="Skills"
                htmlFor={`skills-${index}`}
                value={item.groupSkills}
                onChange={(e: any) => {
                  const temp = updateResumeInput(
                    skillGroups,
                    e.target.value,
                    `[${index}].groupSkills`
                  );
                  setSkillGroups(temp);
                }}
              />
            </div>
          </InputAccordion>
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
