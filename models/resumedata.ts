export interface IPersonalInfo {
  resumeName: string;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface ISkill {
  groupName: string;
  groupSkills: string;
}

export interface ISocialLink {
  label: string;
  href: string;
}

export interface IWorkExperience {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  isWorking: boolean;
}

export interface IProject {
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}
