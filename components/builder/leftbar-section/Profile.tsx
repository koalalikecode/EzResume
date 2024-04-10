// import { useAppDispatch } from "redux/hooks";
import ResumeInput from "../resume-input/ResumeInput";
// import { resumeInputUpdated } from "redux/resumesSlice";
// import { useParams } from "react-router";
import PersonIcon from "@/icon/PersonIcon";

function Profile() {
  // const dispatch = useAppDispatch();
  // const { resumeId } = useParams();
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
          // onChange={(e) => {
          //   dispatch(
          //     resumeInputUpdated({
          //       value: e.target.value,
          //       path: resumeId + ".data.name",
          //     })
          //   );
          // }}
        />
        <ResumeInput
          title="Email address"
          htmlFor="email"
          // onChange={(e) => {
          //   dispatch(
          //     resumeInputUpdated({
          //       value: e.target.value,
          //       path: resumeId + ".data.email",
          //     })
          //   );
          // }}
        />
        <div className="flex gap-2 items-center">
          <ResumeInput
            title="Phone number"
            htmlFor="phone"
            // onChange={(e) => {
            //   dispatch(
            //     resumeInputUpdated({
            //       value: e.target.value,
            //       path: resumeId + ".data.phoneNumber",
            //     })
            //   );
            // }}
          />
          <ResumeInput
            title="Website"
            htmlFor="website"
            //   onChange={(e) => {
            //     dispatch(
            //       resumeInputUpdated({
            //         value: e.target.value,
            //         path: resumeId + ".data.phoneNumber",
            //       })
            //     );
            //   }}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
