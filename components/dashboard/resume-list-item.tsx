"use client";

import Link from "next/link";
import ResumeThumbnail from "../shared/ResumeThumbnail";
import MoreIcon from "@/icon/MoreIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DeleteConfirmPopup from "./delete-confirm-popup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import moment from "moment";

function ResumeListItem({ item }: { item: any }) {
  const [openConfirmPopup, setOpenConfirmPopup] = useState(false);
  const router = useRouter();

  async function handleDeleteResume() {
    await fetch("/api/resume/delete?id=" + item.id, {
      method: "DELETE",
    });

    router.refresh();
  }

  return (
    <>
      <Link href={`/resume/${item.id}`} className="relative group">
        <ResumeThumbnail className="w-full aspect-[1/1.41] bg-warning" />
      </Link>
      <div className="flex justify-between items-center mt-2 pr-2">
        <div>
          <h3 className="font-semibold text-sm">{item.info.resumeName}</h3>
          <span className="text-[#ccc] text-xs">
            Last updated {moment(item.updated_at).fromNow()}
          </span>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="">
            <MoreIcon className="cursor-pointer" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-neutral rounded-btn w-40"
          >
            <li>
              <Link href={`/resume/${item.id}`}>
                <EditIcon fontSize="small" />
                Edit
              </Link>
            </li>
            <li>
              <a
                onClick={() => {
                  setOpenConfirmPopup(true);
                  console.log(2);
                }}
              >
                <DeleteIcon fontSize="small" />
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <DeleteConfirmPopup
        open={openConfirmPopup}
        handleClose={() => {
          setOpenConfirmPopup(false);
        }}
        handleDeleteResume={handleDeleteResume}
      />
    </>
  );
}

export default ResumeListItem;
