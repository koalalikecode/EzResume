import PlusIcon from "@/icon/PlusIcon";
import LightBulbIcon from "@/icon/LightBulbIcon";
import { useAtom } from "jotai";
import { projectAtom } from "@/atoms";
import InputAccordion from "../resume-input/input-accordion";
import { removeResumeSectionGroup, updateResumeInput } from "@/atoms/actions";
import ResumeInput from "../resume-input/ResumeInput";
import DatePickerInput from "../resume-input/DatePicker";
import ResumeTextEditor from "../resume-input/ResumeTextEditor";

function ProjectSection() {
  const [projectList, setProjectList] = useAtom(projectAtom);
  return (
    <div>
      <div className="flex gap-2 items-center">
        <LightBulbIcon />
        <span className="text-2xl font-semibold">Projects</span>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        {projectList.map((item, index: number) => (
          <InputAccordion
            id={`project-${index}`}
            key={`project-${index}`}
            handleDelete={() => {
              setProjectList(removeResumeSectionGroup(projectList, index));
            }}
            title={item.name || "Untitled Project Group"}
          >
            <>
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
                  date={new Date(item.startDate)}
                  path={`[${index}].startDate`}
                  state={projectList}
                  setState={setProjectList}
                />
                <DatePickerInput
                  title="End Date"
                  date={new Date(item.endDate)}
                  path={`[${index}].endDate`}
                  state={projectList}
                  setState={setProjectList}
                />
              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="">Description</label>
                <ResumeTextEditor
                  value={item.description}
                  path={`[${index}].description`}
                  state={projectList}
                  setState={setProjectList}
                />
              </div>
            </>
          </InputAccordion>
        ))}
      </div>
      <button
        className="text-accent px-3 w-full flex hover:bg-accent-content items-center gap-1 mt-4 duration-200"
        onClick={() => {
          const temp = [
            ...projectList,
            {
              name: "",
              position: "",
              startDate: new Date().toString(),
              endDate: new Date().toString(),
              description: "",
            },
          ];
          setProjectList(temp);
        }}
      >
        <PlusIcon className="w-3 h-3" fill="#FF79C6" />
        Add Project
      </button>
    </div>
  );
}

export default ProjectSection;
