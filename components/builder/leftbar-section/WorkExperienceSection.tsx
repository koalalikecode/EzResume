import WorkInputAccordion from "../resume-input/input-accordion/WorkInputAccordion";
import PlusIcon from "@/icon/PlusIcon";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { resumeSectionGroupAdded } from "redux/resumesSlice";
// import { useParams } from "react-router";
import BriefCaseIcon from "@/icon/BriefCaseIcon";

function WorkExperienceSection() {
  // const dispatch = useAppDispatch();
  // const { resumeId } = useParams();
  // const workExperienceGroup = useAppSelector(
  //   (state) => state.resumes[resumeId].data.workExperiences
  // );
  return (
    <div>
      <div className="flex gap-2 items-center">
        <BriefCaseIcon />
        <span className="text-2xl font-semibold">Work Experience</span>
      </div>
      {/* {workExperienceGroup.length > 0 && ( */}
      <div className="flex flex-col gap-3 mt-6">
        {[1].map((_item, index: number) => (
          <WorkInputAccordion index={index} key={`work-${index}`} />
        ))}
      </div>
      {/* )} */}
      <button
        className="text-accent px-3 w-full flex hover:bg-accent items-center gap-1 mt-4 duration-200"
        // onClick={() =>
        //   dispatch(
        //     resumeSectionGroupAdded({
        //       value: {
        //         companyName: "",
        //         position: "",
        //         startDate: new Date().toString(),
        //         endDate: new Date().toString(),
        //         description: "",
        //         isWorking: false,
        //       },
        //       path: resumeId + ".data.workExperiences",
        //     })
        //   )
        // }
      >
        <PlusIcon className="w-3 h-3" fill="#FF79C6" />
        Add Experience
      </button>
    </div>
  );
}

export default WorkExperienceSection;
