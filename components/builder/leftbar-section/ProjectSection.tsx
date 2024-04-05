import ProjectInputAccordion from "../resume-input/input-accordion/ProjectInputAccordion";
import PlusIcon from "icon/PlusIcon";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { resumeSectionGroupAdded } from "redux/resumesSlice";
import { useParams } from "react-router";
import LightBulbIcon from "icon/LightBulbIcon";

function ProjectSection() {
  const dispatch = useAppDispatch();
  const { resumeId } = useParams();
  const projectList = useAppSelector(
    (state) => state.resumes[resumeId].data.projects
  );
  return (
    <div>
      <div className="flex gap-2 items-center">
        <LightBulbIcon />
        <span className="text-2xl font-semibold">Projects</span>
      </div>
      {projectList.length > 0 && (
        <div className="flex flex-col gap-3 mt-6">
          {projectList.map((_item, index: number) => (
            <ProjectInputAccordion index={index} key={`project-${index}`} />
          ))}
        </div>
      )}
      <button
        className="text-primary-pink px-3 w-full flex hover:bg-bg-pink items-center gap-1 mt-4 duration-200"
        onClick={() =>
          dispatch(
            resumeSectionGroupAdded({
              value: {
                name: "",
                position: "",
                startDate: new Date().toString(),
                endDate: new Date().toString(),
                description: "",
              },
              path: resumeId + ".data.projects",
            })
          )
        }
      >
        <PlusIcon className="w-3 h-3" fill="#FF79C6" />
        Add Project
      </button>
    </div>
  );
}

export default ProjectSection;
