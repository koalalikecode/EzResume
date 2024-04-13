import {
  IPersonalInfo,
  IProject,
  ISkill,
  ISocialLink,
  IWorkExperience,
} from "@/models/resumedata";
import { atom } from "jotai";

export const personalInfoAtom = atom<IPersonalInfo>({
  resumeName: "",
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