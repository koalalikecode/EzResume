import LeftBar from "@/components/builder/LeftBar";
import RightBar from "@/components/builder/RightBar";
import { createClient } from "@/utils/supabase/server";
import { useRouter } from "next/router";

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
      <LeftBar resume={resume && resume[0]} />
      <RightBar user={data.user} />
    </main>
  );
}

export default ResumeBuiler;
