import Link from "next/link";
import ResumeThumbnail from "../shared/ResumeThumbnail";
import MoreIcon from "@/icon/MoreIcon";
import { createClient } from "@/utils/supabase/server";
import ResumeListItem from "./resume-list-item";

async function getResumeData(uid: string | undefined) {
  const res = await fetch("http://localhost:3000/api/resume/get?uid=" + uid);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function ResumeList() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();
  const resumeData = await getResumeData(data.user?.id);

  return (
    <>
      {resumeData.map((item: any, index: number) => {
        return (
          <div key={index}>
            <ResumeListItem item={item} />
          </div>
        );
      })}
    </>
  );
}

export default ResumeList;
