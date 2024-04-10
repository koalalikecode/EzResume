import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import {
//   resumeInputUpdated,
//   resumeSectionGroupRemoved,
// } from "redux/resumesSlice";
// import { useParams } from "react-router";
import TrashIcon from "@/icon/TrashIcon";
import ResumeInput from "../ResumeInput";
import DatePickerInput from "../DatePicker";
import ResumeTextEditor from "../ResumeTextEditor";
import SwitchButton from "@/components/shared/SwitchButton";

function WorkInputAccordion({ index }: { index: number }) {
  // const dispatch = useAppDispatch();
  // const { resumeId } = useParams();
  // const workGroupContent = useAppSelector(
  //   (state) => state.resumes[resumeId].data.workExperiences[index]
  // );
  const titleContentGenerate = (): string => {
    // if (workGroupContent.companyName && workGroupContent.position)
    //   return workGroupContent.position + " at " + workGroupContent.companyName;
    // else if (workGroupContent.position || workGroupContent.companyName) {
    //   return workGroupContent.position || workGroupContent.companyName;
    // }
    return "Untitled Position";
  };

  return (
    <Accordion className="!bg-transparent border border-[#ccc] !text-base-content !m-0">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-base-content" />}
        aria-controls={`workExperiences-group-content-${index}`}
        id={`workExperiences-group-header-${index}`}
        className="group"
      >
        <div
          className="hidden absolute top-1 -right-10 p-3 group-hover:block duration-200"
          // onClick={() => {
          //   dispatch(
          //     resumeSectionGroupRemoved({
          //       path: resumeId + `.data.workExperiences`,
          //       index: index,
          //     })
          //   );
          // }}
        >
          <TrashIcon className="stroke-[#ccc] hover:stroke-error duration-200"></TrashIcon>
        </div>
        <div className="font-semibold">{titleContentGenerate()}</div>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex gap-2 items-center">
          <ResumeInput
            title="Company name"
            htmlFor={`company-${index}`}
            // onChange={(e) =>
            //   dispatch(
            //     resumeInputUpdated({
            //       value: e.target.value,
            //       path:
            //         resumeId + `.data.workExperiences[${index}].companyName`,
            //     })
            //   )
            // }
          />
          <ResumeInput
            title="Position"
            htmlFor={`position-${index}`}
            // onChange={(e) =>
            //   dispatch(
            //     resumeInputUpdated({
            //       value: e.target.value,
            //       path: resumeId + `.data.workExperiences[${index}].position`,
            //     })
            //   )
            // }
          />
        </div>
        <div className="flex gap-2 items-center mt-5">
          <DatePickerInput
            title="Start Date"
            date={new Date()}
            path={`data.workExperiences[${index}].startDate`}
          />
          <DatePickerInput
            title="End Date"
            date={new Date()}
            path={`data.workExperiences[${index}].endDate`}
            value={"At Present"}
          >
            <SwitchButton
              color={"#ff79c6"}
              label="Currently work here"
              checked={true}
              handleChecked={
                () => {}
                // dispatch(
                //   resumeInputUpdated({
                //     value: e.target.checked,
                //     path:
                //       resumeId + `.data.workExperiences[${index}].isWorking`,
                //   })
                // )
              }
            />
          </DatePickerInput>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="">Description</label>
          <ResumeTextEditor
            value={""}
            path={`.data.workExperiences[${index}].description`}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default WorkInputAccordion;
