import {
  personalInfoAtom,
  projectAtom,
  skillAtom,
  socialLinksAtom,
  workAtom,
} from "@/atoms";
import { useAtom, useSetAtom } from "jotai";

export function useInitialState(resume: any) {
  const setInfoState = useSetAtom(personalInfoAtom);
  const setLink = useSetAtom(socialLinksAtom);
  const setSkill = useSetAtom(skillAtom);
  const setWork = useSetAtom(workAtom);
  const setProject = useSetAtom(projectAtom);

  setInfoState(resume.info);
  setSkill(resume.skills);
  setLink(resume.links);
  setWork(resume.works);
}
