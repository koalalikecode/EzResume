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
import SwitchButton from "components/shared/SwitchButton";

function WorkInputAccordion({ index }) {
  const dispatch = useAppDispatch();
  const { resumeId } = useParams();
  const workGroupContent = useAppSelector(
    (state) => state.resumes[resumeId].data.workExperiences[index]
  );
  const titleContentGenerate = (): string => {
    if (workGroupContent.companyName && workGroupContent.position)
      return workGroupContent.position + " at " + workGroupContent.companyName;
    else if (workGroupContent.position || workGroupContent.companyName) {
      return workGroupContent.position || workGroupContent.companyName;
    }
    return "Untitled Position";
  };

  return (
    <Accordion className="!bg-transparent border border-[#ccc] !text-primary-light !m-0">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-primary-light" />}
        aria-controls={`workExperiences-group-content-${index}`}
        id={`workExperiences-group-header-${index}`}
        className="group"
      >
        <div
          className="hidden absolute top-1 -right-10 p-3 group-hover:block duration-200"
          onClick={() => {
            dispatch(
              resumeSectionGroupRemoved({
                path: resumeId + `.data.workExperiences`,
                index: index,
              })
            );
          }}
        >
          <TrashIcon className="stroke-[#ccc] hover:stroke-primary-red duration-200"></TrashIcon>
        </div>
        <div className="font-semibold">{titleContentGenerate()}</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex gap-2 items-center">
          <ResumeInput
            title="Company name"
            htmlFor={`company-${index}`}
            onChange={(e) =>
              dispatch(
                resumeInputUpdated({
                  value: e.target.value,
                  path:
                    resumeId + `.data.workExperiences[${index}].companyName`,
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
                  path: resumeId + `.data.workExperiences[${index}].position`,
                })
              )
            }
          />
        </div>
        <div className="flex gap-2 items-center mt-5">
          <DatePickerInput
            title="Start Date"
            date={new Date(workGroupContent.startDate)}
            path={`${resumeId}.data.workExperiences[${index}].startDate`}
          />
          <DatePickerInput
            title="End Date"
            date={new Date(workGroupContent.endDate)}
            path={`${resumeId}.data.workExperiences[${index}].endDate`}
            value={workGroupContent.isWorking && "At Present"}
          >
            <SwitchButton
              color={"#ff79c6"}
              label="Currently work here"
              checked={workGroupContent.isWorking}
              handleChecked={(e) =>
                dispatch(
                  resumeInputUpdated({
                    value: e.target.checked,
                    path:
                      resumeId + `.data.workExperiences[${index}].isWorking`,
                  })
                )
              }
            />
          </DatePickerInput>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="">Description</label>
          <ResumeTextEditor
            value={workGroupContent.description}
            path={`.data.workExperiences[${index}].description`}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default WorkInputAccordion;
