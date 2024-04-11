import lodash from "lodash";

export const updateResumeInput = (state: any, value: string, path: string) => {
  lodash.set(state, path, value);
  return [...state];
};

export const removeResumeSectionGroup = (state: any, index: number) => {
  state.splice(index, 1);
  return [...state];
};
