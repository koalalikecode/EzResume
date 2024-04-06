"use client";

import React, { useState } from "react";
import LoginDialog from "../shared/LoginDialog";
import RegisterDialog from "../shared/RegisterDialog";

function AuthenContainer() {
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
    <React.Fragment>
      <div className="flex gap-4">
        <button
          className="btn btn-outline btn-primary btn-sm"
          onClick={handleOpenLoginDialog}
        >
          Login
        </button>
        <button
          className="btn btn-ghost btn-sm"
          onClick={handleOpenSignupDialog}
        >
          Sign Up
        </button>
      </div>
      <LoginDialog
        open={openLogin}
        handleClose={handleCloseLoginDialog}
        handleOpenLoginDialog={handleOpenLoginDialog}
      />
      <RegisterDialog
        open={openSignup}
        handleClose={handleCloseSignupDialog}
        handleOpenRegisterDialog={handleOpenSignupDialog}
      />
    </React.Fragment>
  );
}

export default AuthenContainer;
