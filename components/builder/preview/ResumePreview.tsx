import { dateFormat } from "@/utils";
import "./index.css";
import React, { ForwardRefRenderFunction, MutableRefObject } from "react";
import { useAtomValue } from "jotai";
import {
  personalInfoAtom,
  skillAtom,
  socialLinksAtom,
  workAtom,
} from "@/atoms";

function ResumePreview(props: any, ref: MutableRefObject<null>) {
  const personalInfo = useAtomValue(personalInfoAtom);
  const skills = useAtomValue(skillAtom);
  const socialLinks = useAtomValue(socialLinksAtom);
  const workExperiences = useAtomValue(workAtom);

  return (
    <div
      id="resume-preview"
      className="w-[700px] min-h-[905.88px] pl-16 pr-12 py-20 bg-white"
    >
      <div ref={ref} className="bg-white text-black text-xs">
        <h1 className="font-bold text-center text-lg">{personalInfo.name}</h1>
        <div className="flex justify-center items-center gap-1">
          <a
            href={"mailto: " + personalInfo.email}
            className="text-[#0000ff] underline"
          >
            {personalInfo.email}
          </a>
          {personalInfo.phone && personalInfo.phone && <span>|</span>}
          <span>{personalInfo.phone}</span>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-1">
          {socialLinks.map((socialLink, index) => (
            <>
              <a
                href={socialLink.href}
                target="_blank"
                className="text-[#0000ff] underline"
              >
                {socialLink.label}
              </a>
              {socialLinks[index + 1] && <span>|</span>}
            </>
          ))}
        </div>
        {skills.length > 0 && (
          <div className="mt-10">
            <h2 className="font-bold pl-2 border-b-[0.5px] border-b-black text-[15px]">
              Skills
            </h2>

            <ul className="list-disc pl-6">
              {skills.map((skillItem) => (
                <li key={skillItem.groupName}>
                  <span className="font-bold">{skillItem.groupName}</span>
                  {skillItem.groupName && skillItem.groupSkills ? ": " : ""}
                  {skillItem.groupSkills}
                </li>
              ))}
            </ul>
          </div>
        )}
        {workExperiences.length > 0 && (
          <div className="mt-6">
            <h2 className="font-bold pl-2 border-b-[0.5px] border-b-black text-[15px]">
              Experience
            </h2>
            <div className="flex flex-col gap-3">
              {workExperiences.map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between px-2">
                    <h3 className="font-bold">{item.position}</h3>
                    <h3 className="font-bold">{item.companyName}</h3>
                    <h3 className="font-bold">
                      {`${dateFormat(item.startDate, "MMM YYYY")}–${
                        item.isWorking
                          ? "Present"
                          : dateFormat(item.endDate, "MMM YYYY")
                      }`}
                    </h3>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="text-editor"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* {projects.length > 0 && (
          <div className="mt-6">
            <h2 className="font-bold pl-2 border-b-[0.5px] border-b-black text-[15px]">
              Personal Projects
            </h2>
            <div className="flex flex-col gap-3">
              {projects.map((item, index) => (
                <div key={"project" + index}>
                  <div className="flex justify-between px-2">
                    <h3 className="font-bold">{item.position}</h3>
                    <h3 className="font-bold">{item.name}</h3>
                    <h3 className="font-bold">
                      {`${dateFormat(item.startDate, "MMM YYYY")}–${dateFormat(
                        item.endDate,
                        "MMM YYYY"
                      )}`}
                    </h3>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{ __html: item.description }}
                    className="text-editor"
                  ></div>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default React.forwardRef(
  ResumePreview as ForwardRefRenderFunction<null, any>
);
