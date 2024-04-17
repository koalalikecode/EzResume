import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TrashIcon from "@/icon/TrashIcon";
import { ReactNode } from "react";

function InputAccordion({
  key,
  handleDelete,
  title,
  children,
}: {
  key: string;
  handleDelete: () => void;
  title: string;
  children: ReactNode;
}) {
  return (
    <Accordion className="!bg-transparent border border-[#ccc] !text-base-content !m-0">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="text-base-content" />}
        aria-controls={`${key}-content`}
        id={`${key}-header`}
        className="group"
      >
        <div
          className="hidden absolute top-1 -right-10 p-3 group-hover:block duration-200"
          onClick={handleDelete}
        >
          <TrashIcon className="stroke-[#ccc] hover:stroke-error duration-200"></TrashIcon>
        </div>
        <div className="font-semibold">{title}</div>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
}

export default InputAccordion;
