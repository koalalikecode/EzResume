import { activityAtom, educationAtom } from "@/atoms";
import SchoolIcon from "@mui/icons-material/School";
import { useAtom } from "jotai";
import ResumeTextEditor from "../resume-input/ResumeTextEditor";
import PlusIcon from "@/icon/PlusIcon";
import InputAccordion from "../resume-input/input-accordion";
import ResumeInput from "../resume-input/ResumeInput";
import DatePickerInput from "../resume-input/DatePicker";
import SwitchButton from "@/components/shared/SwitchButton";
import { removeResumeSectionGroup, updateResumeInput } from "@/atoms/actions";

function EducationSection() {
  const [educationList, setEducationList] = useAtom(educationAtom);
  return (
    <div>
      <div className="flex gap-2 items-center">
        <SchoolIcon sx={{ fontSize: 28, color: "oklch(var(--p))" }} />
        <span className="text-2xl font-semibold">Education</span>
      </div>
      {educationList.length > 0 && (
        <div className="flex flex-col gap-3 mt-6">
          {educationList.map((item, index: number) => (
            <InputAccordion
              id={`education-${index}`}
              key={`education-${index}`}
              handleDelete={() => {
                setEducationList(
                  removeResumeSectionGroup(educationList, index)
                );
              }}
              title={item.name || "Untitled Education Group"}
            >
              <>
                <div className="flex gap-2 items-center">
                  <ResumeInput
                    title="School Name"
                    htmlFor={`company-${index}`}
                    value={item.name}
                    onChange={(e) =>
                      setEducationList(
                        updateResumeInput(
                          educationList,
                          e.target.value,
                          `[${index}].name`
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
                    state={educationList}
                    setState={setEducationList}
                  />
                  <DatePickerInput
                    title="End Date"
                    date={new Date(item.endDate)}
                    path={`[${index}].endDate`}
                    value={item.isLearning ? "At Present" : undefined}
                    state={educationList}
                    setState={setEducationList}
                  >
                    <SwitchButton
                      color={"#ff79c6"}
                      label="Currently learn here"
                      checked={item.isLearning}
                      handleChecked={(e: any) =>
                        setEducationList(
                          updateResumeInput(
                            educationList,
                            e.target.checked,
                            `[${index}].isLearning`
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
                    state={educationList}
                    setState={setEducationList}
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
            ...educationList,
            {
              name: "",
              startDate: new Date().toString(),
              endDate: new Date().toString(),
              description: "",
              isLearning: false,
            },
          ];
          setEducationList(temp);
        }}
      >
        <PlusIcon className="w-3 h-3" fill="#FF79C6" />
        Add Education
      </button>
    </div>
  );
}

export default EducationSection;
