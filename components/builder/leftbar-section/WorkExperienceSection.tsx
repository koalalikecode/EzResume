import PlusIcon from "@/icon/PlusIcon";
import BriefCaseIcon from "@/icon/BriefCaseIcon";
import { useAtom } from "jotai";
import { workAtom } from "@/atoms";
import InputAccordion from "../resume-input/input-accordion";
import { removeResumeSectionGroup, updateResumeInput } from "@/atoms/actions";
import ResumeInput from "../resume-input/ResumeInput";
import DatePickerInput from "../resume-input/DatePicker";
import SwitchButton from "@/components/shared/SwitchButton";
import ResumeTextEditor from "../resume-input/ResumeTextEditor";
import { IWorkExperience } from "@/models/resumedata";

function WorkExperienceSection() {
  const [workList, setWorkList] = useAtom(workAtom);
  const titleContentGenerate = (workContent: IWorkExperience): string => {
    if (workContent.companyName && workContent.position)
      return workContent.position + " at " + workContent.companyName;
    else if (workContent.position || workContent.companyName) {
      return workContent.position || workContent.companyName;
    }
    return "Untitled Position";
  };

  return (
    <div>
      <div className="flex gap-2 items-center">
        <BriefCaseIcon />
        <span className="text-2xl font-semibold">Work Experience</span>
      </div>
      {workList.length > 0 && (
        <div className="flex flex-col gap-3 mt-6">
          {workList.map((item, index: number) => (
            <InputAccordion
              key={`work-${index}`}
              handleDelete={() => {
                setWorkList(removeResumeSectionGroup(workList, index));
              }}
              title={titleContentGenerate(item)}
            >
              <>
                <div className="flex gap-2 items-center">
                  <ResumeInput
                    title="Company name"
                    htmlFor={`company-${index}`}
                    value={item.companyName}
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
                    value={item.position}
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
                    date={new Date(item.startDate)}
                    path={`[${index}].startDate`}
                    state={workList}
                    setState={setWorkList}
                  />
                  <DatePickerInput
                    title="End Date"
                    date={new Date(item.endDate)}
                    path={`[${index}].endDate`}
                    value={item.isWorking ? "At Present" : undefined}
                    state={workList}
                    setState={setWorkList}
                  >
                    <SwitchButton
                      color={"#ff79c6"}
                      label="Currently work here"
                      checked={item.isWorking}
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
                    value={item.description}
                    path={`[${index}].description`}
                    state={workList}
                    setState={setWorkList}
                  />
                </div>
              </>
            </InputAccordion>
          ))}
        </div>
      )}
      <button
        className="text-accent px-3 w-full flex hover:bg-accent-content items-center gap-1 mt-4 duration-200"
        onClick={() => {
          const temp = [
            ...workList,
            {
              companyName: "",
              position: "",
              startDate: new Date().toString(),
              endDate: new Date().toString(),
              description: "",
              isWorking: false,
            },
          ];
          setWorkList(temp);
        }}
      >
        <PlusIcon className="w-3 h-3" fill="#FF79C6" />
        Add Experience
      </button>
    </div>
  );
}

export default WorkExperienceSection;
