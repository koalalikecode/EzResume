import Link from "next/link";
import ResumeThumbnail from "../shared/ResumeThumbnail";
import MoreIcon from "@/icon/MoreIcon";
import { createClient } from "@/utils/supabase/server";

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
            <Link href={`/resume/${item.id}`} className="relative group">
              <ResumeThumbnail className="w-full aspect-[1/1.41] bg-warning" />
            </Link>
            <div className="flex justify-between items-center mt-2 pr-2">
              <div>
                <h3 className="font-semibold text-sm">
                  {item.info.resumeName}
                </h3>
                <span className="text-[#ccc] text-xs">
                  Last updated 2 days ago
                </span>
              </div>
              <MoreIcon className="cursor-pointer" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ResumeList;
