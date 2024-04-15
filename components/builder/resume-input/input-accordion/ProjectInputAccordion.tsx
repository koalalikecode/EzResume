import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TrashIcon from "@/icon/TrashIcon";
import ResumeInput from "../ResumeInput";
import DatePickerInput from "../DatePicker";
import ResumeTextEditor from "../ResumeTextEditor";
import { useAtom } from "jotai";
import { projectAtom } from "@/atoms";
import { removeResumeSectionGroup, updateResumeInput } from "@/atoms/actions";

function ProjectInputAccordion({ index }: { index: number }) {
  const [projectList, setProjectList] = useAtom(projectAtom);

  return (
    <Accordion className="!bg-transparent border border-[#ccc] !text-base-content !m-0">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-base-content" />}
        aria-controls={`projects-group-content-${index}`}
        id={`projects-group-header-${index}`}
        className="group"
      >
        <div
          className="hidden absolute top-1 -right-10 p-3 group-hover:block duration-200"
          onClick={() => {
            setProjectList(removeResumeSectionGroup(projectList, index));
          }}
        >
          <TrashIcon className="stroke-[#ccc] hover:stroke-error duration-200"></TrashIcon>
        </div>
        <div className="font-semibold">{"Untitled Project"}</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex gap-2 items-center">
          <ResumeInput
            title="Project Name"
            htmlFor={`project-${index}`}
            onChange={(e) =>
              setProjectList(
                updateResumeInput(
                  projectList,
                  e.target.value,
                  `[${index}].name`
                )
              )
            }
          />
          <ResumeInput
            title="Position"
            htmlFor={`position-${index}`}
            onChange={(e) =>
              setProjectList(
                updateResumeInput(
                  projectList,
                  e.target.value,
                  `[${index}].position`
                )
              )
            }
          />
        </div>
        <div className="flex gap-2 items-center mt-5">
          <DatePickerInput
            title="Start Date"
            date={new Date(projectList[index].startDate)}
            path={`[${index}].startDate`}
            state={projectList}
            setState={setProjectList}
          />
          <DatePickerInput
            title="End Date"
            date={new Date(projectList[index].endDate)}
            path={`[${index}].endDate`}
            state={projectList}
            setState={setProjectList}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="">Description</label>
          <ResumeTextEditor
            value={projectList[index].description}
            path={`[${index}].description`}
            state={projectList}
            setState={setProjectList}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default ProjectInputAccordion;
