import { activityAtom } from "@/atoms";
import PianoIcon from "@mui/icons-material/Piano";
import { useAtom } from "jotai";
import ResumeTextEditor from "../resume-input/ResumeTextEditor";

function ActivitySection() {
  const [activity, setActivity] = useAtom(activityAtom);
  return (
    <div>
      <div className="flex gap-2 items-center">
        <PianoIcon sx={{ fontSize: 28, color: "oklch(var(--p))" }} />
        <span className="text-2xl font-semibold">Activities</span>
      </div>
      <div className="flex flex-col gap-2 mt-5">
        <ResumeTextEditor
          value={activity}
          path=""
          onChange={(content: string) => {
            setActivity(content);
          }}
        />
      </div>
    </div>
  );
}

export default ActivitySection;
