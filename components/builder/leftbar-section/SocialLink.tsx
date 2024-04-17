import PlusIcon from "@/icon/PlusIcon";
import GlobeIcon from "@/icon/GlobeIcon";
import { socialLinksAtom } from "@/atoms";
import { useAtom } from "jotai";
import ResumeInput from "../resume-input/ResumeInput";
import { removeResumeSectionGroup, updateResumeInput } from "@/atoms/actions";
import InputAccordion from "../resume-input/input-accordion";

function SocialLink() {
  const [socialLinkList, setSocialLinkList] = useAtom(socialLinksAtom);
  return (
    <div>
      <div className="flex gap-2 items-center">
        <GlobeIcon />
        <span className="text-2xl font-semibold">Social Link</span>
      </div>
      <div className="flex flex-col gap-3 mt-6">
        {socialLinkList.map((item, index) => (
          <InputAccordion
            key={`social-links-${index}`}
            handleDelete={() => {
              setSocialLinkList(
                removeResumeSectionGroup(socialLinkList, index)
              );
            }}
            title={item.label || "Untitled Social Link"}
          >
            <div className="flex gap-2 items-center">
              <ResumeInput
                title="Label"
                htmlFor={`skill-group-${index}`}
                value={item.label}
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
                value={item.href}
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
          </InputAccordion>
        ))}
      </div>
      <button
        className="text-accent px-3 w-full flex hover:bg-accent-content items-center gap-1 mt-4 duration-200"
        onClick={() => {
          const temp = [
            ...socialLinkList,
            {
              label: "",
              href: "",
            },
          ];
          setSocialLinkList(temp);
        }}
      >
        <PlusIcon className="w-3 h-3" fill="#FF79C6" />
        Add Link
      </button>
    </div>
  );
}

export default SocialLink;
