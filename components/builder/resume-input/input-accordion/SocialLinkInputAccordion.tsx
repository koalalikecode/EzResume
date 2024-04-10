import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ResumeInput from "../ResumeInput";
// import { useAppDispatch, useAppSelector } from "redux/hooks";
// import {
//   resumeInputUpdated,
//   resumeSectionGroupRemoved,
// } from "redux/resumesSlice";
// import { useParams } from "react-router";
import TrashIcon from "@/icon/TrashIcon";

function SocialLinkInputAccordion({ index }: { index: number }) {
  // const dispatch = useAppDispatch();
  // const { resumeId } = useParams();
  // const socialLinkList = useAppSelector(
  //   (state) => state.resumes[resumeId].data.socialLinks[index]
  // );

  return (
    <Accordion className="!bg-transparent border border-[#ccc] !text-base-content !m-0">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-base-content" />}
        aria-controls={`socialLinks-group-content-${index}`}
        id={`socialLinks-group-header-${index}`}
        className="group"
      >
        <div
          className="hidden absolute top-1 -right-10 p-3 group-hover:block duration-200"
          // onClick={() => {
          //   dispatch(
          //     resumeSectionGroupRemoved({
          //       path: resumeId + `.data.socialLinks`,
          //       index: index,
          //     })
          //   );
          // }}
        >
          <TrashIcon className="stroke-[#ccc] hover:stroke-error duration-200"></TrashIcon>
        </div>
        {"Untitled Social Link"}
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex gap-2 items-center">
          <ResumeInput
            title="Label"
            htmlFor={`skill-group-${index}`}
            // onChange={(e) =>
            //   dispatch(
            //     resumeInputUpdated({
            //       value: e.target.value,
            //       path: resumeId + `.data.socialLinks[${index}].label`,
            //     })
            //   )
            // }
          />
          <ResumeInput
            title="Href"
            htmlFor={`socialLinks-${index}`}
            // onChange={(e) =>
            //   dispatch(
            //     resumeInputUpdated({
            //       value: e.target.value,
            //       path: resumeId + `.data.socialLinks[${index}].href`,
            //     })
            //   )
            // }
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default SocialLinkInputAccordion;
