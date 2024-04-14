"use client";

import { useAtom, useAtomValue } from "jotai";
import { isSyncAtom, resumeAtom } from "@/atoms";
import { useInterval } from "@/hooks/useInterval";
import { useEffect } from "react";

function IntervalHandleComponent({ resume }: { resume: any }) {
  const resumeContent = useAtomValue(resumeAtom);
  const [isSyncing, setIsSyncing] = useAtom(isSyncAtom);

  useEffect(() => {
    setIsSyncing(true);
  }, [resumeContent]);

  async function handleUpdateResume() {
    await fetch("/api/resume/update", {
      method: "PUT",
      body: JSON.stringify({ id: resume.id, updateValues: resumeContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  useInterval(async () => {
    try {
      if (isSyncing) {
        await handleUpdateResume();
        setIsSyncing(false);
      }
    } catch (err) {
      console.error("Failed to update resume");
    }
  }, 3000);
  return <></>;
}

export default IntervalHandleComponent;
