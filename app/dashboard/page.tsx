import Link from "next/link";
import AuthenContainer from "@/components/home/AuthenContainer";
import { createClient } from "@/utils/supabase/server";
import NewResumeBtn from "@/components/dashboard/NewResumeBtn";
import { Suspense } from "react";
import ResumeList from "@/components/dashboard/resume-list";
import Loading from "./loading";

async function Dashboard() {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  return (
    <>
      <header className="max-w-[1560px] mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">
          EzResume
        </Link>
        <AuthenContainer user={data.user} />
      </header>
      <main className="max-w-[1560px] mx-auto">
        <div className="mt-8 px-10 pb-10 grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <NewResumeBtn user={data.user} />
            <h3 className="font-semibold text-sm mt-2">Create new resume</h3>
            <span className="text-[#ccc] text-xs">
              Step by step build your resume
            </span>
          </div>
          <Suspense fallback={<Loading />}>
            <ResumeList />
          </Suspense>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
