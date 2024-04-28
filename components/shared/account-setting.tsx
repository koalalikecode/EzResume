import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import LoginIcon from "@mui/icons-material/Login";
import { ThemeProvider, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { customInputAuthenTheme } from "@/utils/input-validate";
import { createClient } from "@/utils/supabase/client";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";
import { useAtom } from "jotai";
import { avatarAtom, usernameAtom } from "@/atoms";
import Image from "next/image";

export default function AccountSettingDialog({
  open,
  handleClose,
  userId,
}: {
  open: boolean;
  handleClose: () => void;
  userId: string | undefined;
}) {
  const outerTheme = useTheme();
  const supabase = createClient();
  const [ava, setAva] = useState<any>(null);
  const [avaUrl, setAvaUrl] = useAtom(avatarAtom);
  const [name, setName] = useAtom(usernameAtom);

  const tempImgSrc = `https://api.dicebear.com/7.x/identicon/svg?rowColor=8be9fd,50fa7b,ffb86c,ff79c6,bd93f9,ff5555,f1fa8c&backgroundColor=44475a,f8f8f2,6272a4&seed=${name}`;

  const handleSubmitInfo = async () => {
    const config: Config = {
      dictionaries: [adjectives, colors, animals],
      separator: "_",
    };

    const nameFromSeed: string = uniqueNamesGenerator(config);
    const { data, error } = await supabase.storage
      .from("ava-image")
      .upload(`public/${nameFromSeed}.png`, ava, {
        cacheControl: "3600",
        upsert: false,
      });

    const { data: link } = supabase.storage
      .from("ava-image")
      .getPublicUrl(`public/${nameFromSeed}.png`);

    setAvaUrl(link.publicUrl);

    await fetch("/api/user/update", {
      method: "PUT",
      body: JSON.stringify({
        id: userId,
        updateValues: { avatar: link.publicUrl, name: name },
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "oklch(var(--b3))",
            color: "oklch(var(--bc))",
            maxWidth: "650px",
          },
        }}
      >
        <DialogTitle className="flex items-center gap-4">
          <LoginIcon />
          <span>Profile Information</span>
        </DialogTitle>
        <DialogContent>
          <div className="flex items-center flex-col">
            <div className="avatar my-4">
              <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                {avaUrl ? (
                  <Image src={avaUrl} alt="avatar" width={80} height={80} />
                ) : (
                  <img src={tempImgSrc} alt="avatar" />
                )}
              </div>
            </div>
            <input
              type="file"
              accept="image/*" // Only accept image files
              onChange={(e) => {
                if (e.target.files) setAva(e.target.files[0]);
                const reader = new FileReader();

                reader.onloadend = function (e) {
                  setAvaUrl(e?.target?.result as string);
                };

                if (e.target.files) {
                  reader.readAsDataURL(e.target.files[0]);
                }
              }}
              className="file-input file-input-bordered file-input-primary file-input-xs w-full max-w-xs"
            />
          </div>
          <ThemeProvider theme={customInputAuthenTheme(outerTheme)}>
            <TextField
              autoFocus
              margin="normal"
              id="email"
              label="Email"
              type="email"
              disabled
              fullWidth
              value={"duykhanhchi1993@gmail.com"}
              variant="standard"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <TextField
              autoFocus
              margin="normal"
              id="name"
              label="Your full name"
              type="text"
              value={name}
              fullWidth
              variant="standard"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </ThemeProvider>
        </DialogContent>
        <DialogActions className="!px-6 !pb-4 gap-1 items-center">
          <button
            className="btn btn-neutral btn-sm btn-outline"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button className="btn btn-success btn-sm" onClick={handleSubmitInfo}>
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
