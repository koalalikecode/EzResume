import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import {
  resumeInputUpdated,
  resumeSectionGroupRemoved,
} from "redux/resumesSlice";
import { useParams } from "react-router";
import TrashIcon from "icon/TrashIcon";
import ResumeInput from "../ResumeInput";
import DatePickerInput from "../DatePicker";
import ResumeTextEditor from "../ResumeTextEditor";

function ProjectInputAccordion({ index }) {
  const dispatch = useAppDispatch();
  const { resumeId } = useParams();
  const projectContent = useAppSelector(
    (state) => state.resumes[resumeId].data.projects[index]
  );

  return (
    <Accordion className="!bg-transparent border border-[#ccc] !text-primary-light !m-0">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-primary-light" />}
        aria-controls={`projects-group-content-${index}`}
        id={`projects-group-header-${index}`}
        className="group"
      >
        <div
          className="hidden absolute top-1 -right-10 p-3 group-hover:block duration-200"
          onClick={() => {
            dispatch(
              resumeSectionGroupRemoved({
                path: resumeId + `.data.projects`,
                index: index,
              })
            );
          }}
        >
          <TrashIcon className="stroke-[#ccc] hover:stroke-primary-red duration-200"></TrashIcon>
        </div>
        <div className="font-semibold">
          {projectContent.name || "Untitled Project"}
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex gap-2 items-center">
          <ResumeInput
            title="Project Name"
            htmlFor={`project-${index}`}
            onChange={(e) =>
              dispatch(
                resumeInputUpdated({
                  value: e.target.value,
                  path: resumeId + `.data.projects[${index}].name`,
                })
              )
            }
          />
          <ResumeInput
            title="Position"
            htmlFor={`position-${index}`}
            onChange={(e) =>
              dispatch(
                resumeInputUpdated({
                  value: e.target.value,
                  path: resumeId + `.data.projects[${index}].position`,
                })
              )
            }
          />
        </div>
        <div className="flex gap-2 items-center mt-5">
          <DatePickerInput
            title="Start Date"
            date={new Date(projectContent.startDate)}
            path={`${resumeId}.data.projects[${index}].startDate`}
          />
          <DatePickerInput
            title="End Date"
            date={new Date(projectContent.endDate)}
            path={`${resumeId}.data.projects[${index}].endDate`}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="">Description</label>
          <ResumeTextEditor
            value={projectContent.description}
            path={`.data.projects[${index}].description`}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default ProjectInputAccordion;
