import { useAtom } from "jotai";
import ResumeInput from "../resume-input/ResumeInput";
import PersonIcon from "@/icon/PersonIcon";
import { personalInfoAtom } from "@/atoms";

function Profile() {
  const [personalInfo, setPersonalInfo] = useAtom(personalInfoAtom);

  return (
    <div>
      <div className="flex gap-2 items-center">
        <PersonIcon />
        <span className="text-2xl font-semibold">Personal Details</span>
      </div>
      <div className="flex flex-col gap-5 mt-6">
        <ResumeInput
          title="Full name"
          htmlFor="fullname"
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              name: e.target.value,
            });
          }}
        />
        <ResumeInput
          title="Email address"
          htmlFor="email"
          onChange={(e) => {
            setPersonalInfo({
              ...personalInfo,
              email: e.target.value,
            });
          }}
        />
        <div className="flex gap-2 items-center">
          <ResumeInput
            title="Phone number"
            htmlFor="phone"
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                phone: e.target.value,
              });
            }}
          />
          <ResumeInput
            title="Website"
            htmlFor="website"
            onChange={(e) => {
              setPersonalInfo({
                ...personalInfo,
                website: e.target.value,
              });
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
