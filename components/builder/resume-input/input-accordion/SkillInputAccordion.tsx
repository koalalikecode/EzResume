import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ResumeInput from "../ResumeInput";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import {
//   resumeInputUpdated,
//   resumeSectionGroupRemoved,
// } from "redux/resumesSlice";
// import { useParams } from "react-router";
import TrashIcon from "@/icon/TrashIcon";

function SkillInputAccordion({ index }: { index: number }) {
  // const dispatch = useAppDispatch();
  // const { resumeId } = useParams();
  // const SkillGroupContent = useAppSelector(
  //   (state) => state.resumes[resumeId].data.skills[index]
  // );

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
          // onClick={() => {
          //   dispatch(
          //     resumeSectionGroupRemoved({
          //       path: resumeId + `.data.skills`,
          //       index: index,
          //     })
          //   );
          // }}
        >
          <TrashIcon className="stroke-[#ccc] hover:stroke-error duration-200"></TrashIcon>
        </div>
        {"Untitled Skills Group"}
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex gap-2 items-center">
          <ResumeInput
            title="Group name"
            htmlFor={`skill-group-${index}`}
            // onChange={(e) =>
            //   dispatch(
            //     resumeInputUpdated({
            //       value: e.target.value,
            //       path: resumeId + `.data.skills[${index}].groupName`,
            //     })
            //   )
            // }
          />
          <ResumeInput
            title="Skills"
            htmlFor={`skills-${index}`}
            // onChange={(e) =>
            //   dispatch(
            //     resumeInputUpdated({
            //       value: e.target.value,
            //       path: resumeId + `.data.skills[${index}].groupSkills`,
            //     })
            //   )
            // }
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default SkillInputAccordion;
