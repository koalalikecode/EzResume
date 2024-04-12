import WorkInputAccordion from "../resume-input/input-accordion/WorkInputAccordion";
import PlusIcon from "@/icon/PlusIcon";
import BriefCaseIcon from "@/icon/BriefCaseIcon";
import { useAtom } from "jotai";
import { workAtom } from "@/atoms";

function WorkExperienceSection() {
  const [workList, setWorkList] = useAtom(workAtom);
  return (
    <div>
      <div className="flex gap-2 items-center">
        <BriefCaseIcon />
        <span className="text-2xl font-semibold">Work Experience</span>
      </div>
      {workList.length > 0 && (
        <div className="flex flex-col gap-3 mt-6">
          {workList.map((_item, index: number) => (
            <WorkInputAccordion index={index} key={`work-${index}`} />
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
