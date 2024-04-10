import PlusIcon from "@/icon/PlusIcon";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import { resumeSectionGroupAdded } from "redux/resumesSlice";
// import { useParams } from "react-router";
import GlobeIcon from "@/icon/GlobeIcon";
import SocialLinkInputAccordion from "../resume-input/input-accordion/SocialLinkInputAccordion";

function SocialLink() {
  // const dispatch = useAppDispatch();
  // const { resumeId } = useParams();
  // const skillsGroups = useAppSelector(
  //   (state) => state.resumes[resumeId].data.socialLinks
  // );
  return (
    <div>
      <div className="flex gap-2 items-center">
        <GlobeIcon />
        <span className="text-2xl font-semibold">Social Link</span>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        {/* {skillsGroups.map((item, index) => ( */}
        <SocialLinkInputAccordion index={1} />
        {/* ))} */}
      </div>
      <button
        className="text-accent px-3 w-full flex hover:bg-accent-content items-center gap-1 mt-4 duration-200"
        // onClick={() =>
        //   dispatch(
        //     resumeSectionGroupAdded({
        //       value: {
        //         label: "",
        //         href: "",
        //       },
        //       path: resumeId + ".data.socialLinks",
        //     })
        //   )
        // }
      >
        <PlusIcon className="w-3 h-3" fill="#FF79C6" />
        Add Link
      </button>
    </div>
  );
}

export default SocialLink;
