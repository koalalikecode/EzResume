import ProjectInputAccordion from "../resume-input/input-accordion/ProjectInputAccordion";
import PlusIcon from "@/icon/PlusIcon";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { resumeSectionGroupAdded } from "redux/resumesSlice";
// import { useParams } from "react-router";
import LightBulbIcon from "@/icon/LightBulbIcon";
import { useAtom } from "jotai";
import { projectAtom } from "@/atoms";

function ProjectSection() {
  const [projectList, setProjectList] = useAtom(projectAtom);
  return (
    <div>
      <div className="flex gap-2 items-center">
        <LightBulbIcon />
        <span className="text-2xl font-semibold">Projects</span>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        {projectList.map((_item, index: number) => (
          <ProjectInputAccordion index={index} key={`project-${index}`} />
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
