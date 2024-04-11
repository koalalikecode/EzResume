import { IPersonalInfo, IProject, ISkill } from "@/models/resumedata";
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

export const projectsAtom = atom<IProject[]>([]);
