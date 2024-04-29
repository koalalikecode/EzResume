import {
  IEducation,
  IPersonalInfo,
  IProject,
  ISkill,
  ISocialLink,
  IWorkExperience,
} from "@/models/resumedata";
import { atom } from "jotai";

export const usernameAtom = atom<string>("");
export const avatarAtom = atom<string>("");
export const emailAtom = atom<string>("");

export const personalInfoAtom = atom<IPersonalInfo>({
  resumeName: "Untitled Resume",
  name: "",
  email: "",
  phone: "",
  website: "",
});

export const skillAtom = atom<ISkill[]>([
  {
    groupName: "",
    groupSkills: "",
  },
]);

export const socialLinksAtom = atom<ISocialLink[]>([
  {
    label: "",
    href: "",
  },
]);

export const workAtom = atom<IWorkExperience[]>([
  {
    companyName: "",
    position: "",
    startDate: new Date().toString(),
    endDate: new Date().toString(),
    description: "",
    isWorking: false,
  },
]);

export const projectAtom = atom<IProject[]>([]);

export const activityAtom = atom<string>("");

export const educationAtom = atom<IEducation[]>([]);

export const resumeAtom = atom((get) => ({
  info: get(personalInfoAtom),
  skills: get(skillAtom),
  links: get(socialLinksAtom),
  works: get(workAtom),
  projects: get(projectAtom),
  activity: get(activityAtom),
  educations: get(educationAtom),
}));

export const isSyncAtom = atom<Boolean>(false);
