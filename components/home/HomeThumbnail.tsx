import ButtonLine from "assets/home/ButtonLine";
import LoginDialog from "components/shared/LoginDialog";
import RegisterDialog from "components/shared/RegisterDialog";
import ResumeThumbnail from "components/shared/ResumeThumbnail";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "redux/hooks";

function HomeThumbnail() {
  const email = useAppSelector((state) => state.userInfo.email);
  const userName = useAppSelector((state) => state.userInfo.userName);
  const isLogin: boolean = email.length > 0 || userName.length > 0;

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const handleCloseLoginDialog = () => {
    setOpenLogin(false);
  };
  const handleOpenLoginDialog = () => {
    setOpenLogin(true);
  };

  const handleCloseSignupDialog = () => {
    setOpenSignup(false);
  };
  const handleOpenSignupDialog = () => {
    setOpenSignup(true);
  };
  return (
    <>
      <div className="absolute -top-10 left-1/3 -translate-x-20 md:hidden">
        <ButtonLine />
        {isLogin && (
          <>
            <button className="group bg-transparent text-[32px] absolute bottom-2 left-5 py-2 px-5">
              <div className="w-10 h-1 absolute rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:bg-transparent-green group-hover:shadow-green-shadow -z-10 duration-200 ease-in"></div>
              NEW
            </button>
            <NavLink
              to="/dashboard"
              className="group bg-transparent text-[32px] absolute bottom-[88px] right-3 py-2 px-5"
            >
              <div className="w-10 h-1 absolute rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:bg-transparent-pink group-hover:shadow-pink-shadow -z-10 duration-200 ease-in"></div>
              OPEN
            </NavLink>
          </>
        )}
        {!isLogin && (
          <>
            <button
              className="group bg-transparent text-[32px] absolute bottom-2 left-0 py-2 px-5"
              onClick={handleOpenSignupDialog}
            >
              <div className="w-10 h-1 absolute rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:bg-transparent-green group-hover:shadow-green-shadow -z-10 duration-200 ease-in"></div>
              SIGNUP
            </button>
            <button
              className="group bg-transparent text-[32px] absolute bottom-[88px] right-1 py-2 px-5"
              onClick={handleOpenLoginDialog}
            >
              <div className="w-10 h-1 absolute rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 group-hover:bg-transparent-pink group-hover:shadow-pink-shadow -z-10 duration-200 ease-in"></div>
              LOGIN
            </button>
          </>
        )}
        <div className="flex gap-4 top-[320px] absolute left-[250px]">
          <ResumeThumbnail className="w-[283px] h-[400px] 2xl:w-[255px] 2xl:h-[360px] bg-primary-orange" />
          <ResumeThumbnail className="w-[283px] h-[400px] 2xl:w-[255px] 2xl:h-[360px] bg-second-dark" />
          <ResumeThumbnail className="w-[283px] h-[400px] 2xl:w-[255px] 2xl:h-[360px] bg-black-blue" />
        </div>
      </div>
      <LoginDialog
        open={openLogin}
        handleClose={handleCloseLoginDialog}
        handleOpenRegisterDialog={handleOpenSignupDialog}
      />
      <RegisterDialog
        open={openSignup}
        handleClose={handleCloseSignupDialog}
        handleOpenLoginDialog={handleOpenLoginDialog}
      />
    </>
  );
}

export default HomeThumbnail;
