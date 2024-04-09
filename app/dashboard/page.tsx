import CornerHeader from "@/components/home/CornerHeader";
import Link from "next/link";
import ResumeThumbnail from "@/components/shared/ResumeThumbnail";
import PlusIcon from "@/icon/PlusIcon";
import MoreIcon from "@/icon/MoreIcon";
import AuthenContainer from "@/components/home/AuthenContainer";
import { createClient } from "@/utils/supabase/server";

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
            <Link href="/dashboard" className="relative group">
              <ResumeThumbnail className="w-full aspect-[1/1.41] bg-neutral" />
              <span className="w-16 h-16 bg-[#757575] rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center group-hover:bg-accent duration-200">
                <PlusIcon />
              </span>
            </Link>
            <h3 className="font-semibold text-sm mt-2">Create new resume</h3>
            <span className="text-[#ccc] text-xs">
              Step by step build your resume
            </span>
          </div>
          {[1, 2, 3].map((key) => {
            return (
              <div key={key}>
                <Link href={`/resume/build/${key}`} className="relative group">
                  <ResumeThumbnail className="w-full aspect-[1/1.41] bg-warning" />
                </Link>
                <div className="flex justify-between items-center mt-2 pr-2">
                  <div>
                    <h3 className="font-semibold text-sm">Resume Name</h3>
                    <span className="text-[#ccc] text-xs">
                      Last updated 2 days ago
                    </span>
                  </div>
                  <MoreIcon className="cursor-pointer" />
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}

export default Dashboard;
