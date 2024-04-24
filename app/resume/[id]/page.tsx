import LeftBar from "@/components/builder/LeftBar";
import RightBar from "@/components/builder/RightBar";
import { createClient } from "@/utils/supabase/server";
import { Suspense } from "react";
import ResumeInputSkeleton from "./loading";

async function getResumeDataById(id: string | string[] | undefined) {
  const supabase = createClient();
  const { data: resume, error } = await supabase
    .from("resume")
    .select()
    .eq("id", id);

  return resume;
}

async function ResumeBuiler({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const resume = await getResumeDataById(params.id);
  const { data, error } = await supabase.auth.getUser();

  return (
    <main className="max-w-[2000px] mx-auto flex h-screen">
      <Suspense fallback={<ResumeInputSkeleton />}>
        <LeftBar resume={resume && resume[0]} />
      </Suspense>

      <Suspense
        fallback={
          <div className="flex-grow h-screen flex flex-col gap-4 py-4 px-8">
            <div className="skeleton w-full h-10"></div>
            <div className="skeleton w-full h-full"></div>
          </div>
        }
      >
        <RightBar user={data.user} />
      </Suspense>
    </main>
  );
}

export default ResumeBuiler;
