import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ResumeInput from "../ResumeInput";
import TrashIcon from "@/icon/TrashIcon";
import { useAtom } from "jotai";
import { skillAtom } from "@/atoms";
import { removeResumeSectionGroup, updateResumeInput } from "@/atoms/actions";

function SkillInputAccordion({ index }: { index: number }) {
  const [skillGroups, setSkillGroups] = useAtom(skillAtom);

  return (
    <Accordion className="!bg-transparent border border-[#ccc] !text-base-content !m-0">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-base-content" />}
        aria-controls={`skills-group-content-${index}`}
        id={`skills-group-header-${index}`}
        className="group"
      >
        <div
          className="hidden absolute top-1 -right-10 p-3 group-hover:block duration-200"
          onClick={() => {
            const temp = removeResumeSectionGroup(skillGroups, index);
            setSkillGroups(temp);
          }}
        >
          <TrashIcon className="stroke-[#ccc] hover:stroke-error duration-200"></TrashIcon>
        </div>
        {skillGroups[index].groupName || "Untitled Skills Group"}
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex gap-2 items-center">
          <ResumeInput
            title="Group name"
            htmlFor={`skill-group-${index}`}
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
      </AccordionDetails>
    </Accordion>
  );
}

export default SkillInputAccordion;
