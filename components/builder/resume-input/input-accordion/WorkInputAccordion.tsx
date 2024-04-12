import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TrashIcon from "@/icon/TrashIcon";
import ResumeInput from "../ResumeInput";
import DatePickerInput from "../DatePicker";
import ResumeTextEditor from "../ResumeTextEditor";
import SwitchButton from "@/components/shared/SwitchButton";
import { useAtom } from "jotai";
import { workAtom } from "@/atoms";
import { removeResumeSectionGroup, updateResumeInput } from "@/atoms/actions";

function WorkInputAccordion({ index }: { index: number }) {
  const [workList, setWorkList] = useAtom(workAtom);

  const titleContentGenerate = (): string => {
    const workContent = workList[index];
    if (workContent.companyName && workContent.position)
      return workContent.position + " at " + workContent.companyName;
    else if (workContent.position || workContent.companyName) {
      return workContent.position || workContent.companyName;
    }
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
          onClick={() => {
            setWorkList(removeResumeSectionGroup(workList, index));
          }}
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
            onChange={(e) =>
              setWorkList(
                updateResumeInput(
                  workList,
                  e.target.value,
                  `[${index}].companyName`
                )
              )
            }
          />
          <ResumeInput
            title="Position"
            htmlFor={`position-${index}`}
            onChange={(e) =>
              setWorkList(
                updateResumeInput(
                  workList,
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
            date={new Date(workList[index].startDate)}
            path={`[${index}].startDate`}
            state={workList}
            setState={setWorkList}
          />
          <DatePickerInput
            title="End Date"
            date={new Date(workList[index].endDate)}
            path={`[${index}].endDate`}
            value={workList[index].isWorking ? "At Present" : undefined}
            state={workList}
            setState={setWorkList}
          >
            <SwitchButton
              color={"#ff79c6"}
              label="Currently work here"
              checked={workList[index].isWorking}
              handleChecked={(e: any) =>
                setWorkList(
                  updateResumeInput(
                    workList,
                    e.target.checked,
                    `[${index}].isWorking`
                  )
                )
              }
            />
          </DatePickerInput>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label htmlFor="">Description</label>
          <ResumeTextEditor
            value={workList[index].description}
            path={`[${index}].description`}
            state={workList}
            setState={setWorkList}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default WorkInputAccordion;
