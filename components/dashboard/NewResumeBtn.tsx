"use client";

import PlusIcon from "@/icon/PlusIcon";
import ResumeThumbnail from "../shared/ResumeThumbnail";
import { useRouter } from "next/navigation";

function NewResumeBtn({ user }: { user: any }) {
  const router = useRouter();

  async function handleCreateResume() {
    const response = await fetch("/api/resume/add", {
      method: "POST",
      body: JSON.stringify({ uid: user.id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const { id } = await response.json();
    router.push("/resume");
  }
  return (
    <div className="relative group cursor-pointer" onClick={handleCreateResume}>
      <ResumeThumbnail className="w-full aspect-[1/1.41] bg-neutral" />
      <span className="w-16 h-16 bg-[#757575] rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center justify-center group-hover:bg-accent duration-200">
        <PlusIcon />
      </span>
    </div>
  );
}

export default NewResumeBtn;
