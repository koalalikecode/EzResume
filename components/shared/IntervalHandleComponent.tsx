import { useInterval } from "hooks/useInterval";
import { useState } from "react";
import { useParams } from "react-router";
import { useUpdateResumeMutation } from "redux/apiSlice";
import { useAppSelector } from "redux/hooks";
import lodash from "lodash";

function IntervalHandleComponent() {
  const { resumeId } = useParams();
  const resumeContent = useAppSelector((state) => state.resumes[resumeId].data);
  const [updateResume] = useUpdateResumeMutation();
  const [resumeContentState, setResumeContentState] = useState(resumeContent);

  useInterval(async () => {
    try {
      if (!lodash.isEqual(resumeContent, resumeContentState)) {
        await updateResume({ resumeId, resumeContent });
        setResumeContentState(resumeContent);
      }
    } catch (err) {
      console.error("Failed to update resume");
    }
  }, 3000);
  return <></>;
}

export default IntervalHandleComponent;
