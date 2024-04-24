import { createClient } from "@/utils/supabase/server";
import ResumeListItem from "./resume-list-item";

async function getResumeData(uid: string | undefined) {
  console.log(process.env.NEXT_PUBLIC_BASE_URL + "/api/resume/get?uid=" + uid);

  const res = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/resume/get?uid=" + uid
  );
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
