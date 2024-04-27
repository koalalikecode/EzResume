import React from "react";
// import { useAppSelector } from "redux/hooks";
import AccountMenu from "./AccountMenu";
import AccountSettingDialog from "./account-setting";

function AvaButton({
  avaImageURL,
  name,
}: {
  avaImageURL: string;
  name: string;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openAccountSetting, setOpenAccountSetting] =
    React.useState<boolean>(false);
  const imgSrc = avaImageURL
    ? avaImageURL
    : `https://api.dicebear.com/7.x/identicon/svg?rowColor=8be9fd,50fa7b,ffb86c,ff79c6,bd93f9,ff5555,f1fa8c&backgroundColor=44475a,f8f8f2,6272a4&seed=${name}`;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <span className="rounded-full w-10 h-10" onClick={handleClick}>
        <img src={imgSrc} className="w-10 h-10 rounded-full" alt="ava-image" />
      </span>
      <AccountMenu
        anchorEl={anchorEl}
        handleClose={handleClose}
        handleOpenProfile={setOpenAccountSetting}
      />
      <AccountSettingDialog
        open={openAccountSetting}
        handleClose={() => setOpenAccountSetting(false)}
      />
    </React.Fragment>
  );
}

export default AvaButton;
