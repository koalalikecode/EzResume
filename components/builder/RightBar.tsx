"use client";
import AvaButton from "@/components/shared/AvaButton";
import HomeIcon from "@/icon/HomeIcon";
import { useRef } from "react";
import ResumePreview from "./preview/ResumePreview";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useReactToPrint } from "react-to-print";
import Link from "next/link";
import { type User } from "@supabase/supabase-js";
import SyncIcon from "@/icon/sync-success.svg";
import Image from "next/image";
import { useAtom, useAtomValue } from "jotai";
import { isSyncAtom, personalInfoAtom } from "@/atoms";
import { updateResumeInput } from "@/atoms/actions";

function RightBar({ user }: { user: User | null }) {
  const componentRef = useRef(null);
  const isSync = useAtomValue(isSyncAtom);
  const [resumeInfo, setResumeInfo] = useAtom(personalInfoAtom);

  const handlePrint = useReactToPrint({
    pageStyle: `@media print {
      @page {
        size: 700px 905.88px;
        margin: 80px 48px 80px 64px;
      }
    }`,
    content: () => componentRef.current,
  });
  return (
    <section className="flex-grow flex flex-col">
      <div className="px-6 py-3 border-b border-b-second-dark flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Link href="/dashboard">
            <HomeIcon />
          </Link>
          <span className="text-secondary font-bold">/</span>
          <input
            type="text"
            className="border-none outline-none bg-transparent"
            value={resumeInfo.resumeName}
            onChange={(e) =>
              setResumeInfo({ ...resumeInfo, resumeName: e.target.value })
            }
          />
        </div>
        <div className="flex items-center gap-6">
          {isSync ? (
            <div className="flex gap-2 items-center">
              <span className="loading loading-spinner loading-xs text-secondary"></span>
              <p className="text-sm">Saving...</p>
            </div>
          ) : (
            <Image src={SyncIcon} alt="sync-success" width={22} height={22} />
          )}
          <button className="btn btn-secondary btn-sm" onClick={handlePrint}>
            Download PDF
          </button>
          <AvaButton
            name={user?.user_metadata.full_name}
            avaImageURL={user?.user_metadata.avatar_url}
          />
        </div>
      </div>
      <TransformWrapper centerOnInit={true} maxScale={3} minScale={0.8}>
        <TransformComponent wrapperStyle={{ flexGrow: "1", width: "100%" }}>
          <ResumePreview ref={componentRef} />
        </TransformComponent>
      </TransformWrapper>
    </section>
  );
}

export default RightBar;
