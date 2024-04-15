import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ResumeInput from "../ResumeInput";
import TrashIcon from "@/icon/TrashIcon";
import { useAtom } from "jotai";
import { socialLinksAtom } from "@/atoms";
import { removeResumeSectionGroup, updateResumeInput } from "@/atoms/actions";

function SocialLinkInputAccordion({ index }: { index: number }) {
  const [socialLinkList, setSocialLinkList] = useAtom(socialLinksAtom);

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
          onClick={() => {
            const temp = removeResumeSectionGroup(socialLinkList, index);
            setSocialLinkList(temp);
          }}
        >
          <TrashIcon className="stroke-[#ccc] hover:stroke-error duration-200"></TrashIcon>
        </div>
        {socialLinkList[index].label || "Untitled Social Link"}
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex gap-2 items-center">
          <ResumeInput
            title="Label"
            htmlFor={`skill-group-${index}`}
            value={socialLinkList[index].label}
            onChange={(e) => {
              const temp = updateResumeInput(
                socialLinkList,
                e.target.value,
                `[${index}].label`
              );
              setSocialLinkList(temp);
            }}
          />
          <ResumeInput
            title="Href"
            htmlFor={`socialLinks-${index}`}
            value={socialLinkList[index].href}
            onChange={(e) => {
              const temp = updateResumeInput(
                socialLinkList,
                e.target.value,
                `[${index}].href`
              );
              setSocialLinkList(temp);
            }}
          />
        </div>
      </AccordionDetails>
    </Accordion>
  );
}

export default SocialLinkInputAccordion;
