"use client";

import React, { useCallback, useEffect, useState } from "react";
import LoginDialog from "../shared/LoginDialog";
import RegisterDialog from "../shared/RegisterDialog";
import { createClient } from "@/utils/supabase/client";
import { type User } from "@supabase/supabase-js";
import AvaButton from "../shared/AvaButton";

function AuthenContainer({ user }: { user: User | null }) {
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
        {user ? (
          <>
            <AvaButton
              name={user.user_metadata.full_name}
              avaImageURL={user.user_metadata.avatar_url}
            />
          </>
        ) : (
          <>
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
          </>
        )}
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
    </React.Fragment>
  );
}

export default AuthenContainer;
