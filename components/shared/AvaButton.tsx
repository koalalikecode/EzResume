import React, { useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";
import AccountSettingDialog from "./account-setting";
import { useAtom } from "jotai";
import { avatarAtom, emailAtom, usernameAtom } from "@/atoms";

function AvaButton({ userId }: { userId: string | undefined }) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openAccountSetting, setOpenAccountSetting] =
    React.useState<boolean>(false);
  const [username, setUsername] = useAtom(usernameAtom);
  const [avatarURL, setAvatarURL] = useAtom(avatarAtom);
  const [email, setEmail] = useAtom(emailAtom);
  const [imgSrc, setImgSrc] = useState("");

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGetUserData = async () => {
    const res = await fetch("/api/user/get?uid=" + userId);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }
    const user = await res.json();
    setUsername(user.full_name);
    setAvatarURL(user.avatar);
    setEmail(user.email);
  };

  useEffect(() => {
    handleGetUserData();
  }, []);

  useEffect(() => {
    setImgSrc(
      avatarURL ||
        `https://api.dicebear.com/7.x/identicon/svg?rowColor=8be9fd,50fa7b,ffb86c,ff79c6,bd93f9,ff5555,f1fa8c&backgroundColor=44475a,f8f8f2,6272a4&seed=${username}`
    );
  }, [avatarURL]);

  return (
    <React.Fragment>
      <span className="rounded-full w-10 h-10" onClick={handleClick}>
        <img src={imgSrc} className="rounded-full w-10 h-10" alt="ava-image" />
      </span>
      <AccountMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleOpenProfile={setOpenAccountSetting}
      />
      <AccountSettingDialog
        open={openAccountSetting}
        handleClose={() => setOpenAccountSetting(false)}
        userId={userId}
      />
    </React.Fragment>
  );
}

export default AvaButton;
