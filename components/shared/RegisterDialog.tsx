import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
// import React, { useState } from "react";
// import { useAppDispatch } from "redux/hooks";
// import { userInfoUpdated } from "redux/userSlice";
// import { useLoginGoogleMutation, useVerifyUserMutation } from "redux/apiSlice";
import {
  checkConfirmPassword,
  checkNotEmpty,
  customInputAuthenTheme,
} from "@/utils/input-validate";
import { useEffect, useState } from "react";
import { handleSignInWithGoogle, signup } from "@/lib/authen/actions";

export default function RegisterDialog({
  open,
  handleClose,
  handleOpenLoginDialog,
}: {
  open: boolean;
  handleClose: () => void;
  handleOpenLoginDialog: () => void;
}) {
  const outerTheme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);

  const handleRegister = () => {
    const formData = new FormData();
    if (email !== null) {
      formData.append("email", email);
    }
    if (name !== null) {
      formData.append("full_name", name);
    }
    if (password !== null) {
      formData.append("password", password);
    }
    signup(formData);
    handleClose();
  };

  const responseMessage = async (credentialResponse: any) => {
    if (credentialResponse.credential != null) {
      handleSignInWithGoogle(credentialResponse);
    }
    handleClose();
  };
  const errorMessage = () => {
    console.log("Error");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
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
          <PersonAddAlt1Icon />
          <span>Create an account</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="!text-neutral-content w-[600px]">
            Please enter your personal information to create an account.
          </DialogContentText>
          <ThemeProvider theme={customInputAuthenTheme(outerTheme)}>
            <div className="flex gap-4">
              <TextField
                error={email != null && !checkNotEmpty(email)}
                autoFocus
                margin="normal"
                id="email"
                label="User email"
                type="email"
                fullWidth
                variant="standard"
                helperText={
                  email != null && !checkNotEmpty(email)
                    ? "This is required field"
                    : ""
                }
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                autoFocus
                margin="normal"
                id="name"
                label="Full name"
                type="text"
                fullWidth
                variant="standard"
                helperText={
                  name != null && !checkNotEmpty(name)
                    ? "This is required field"
                    : ""
                }
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="flex gap-4">
              <TextField
                error={password != null && !checkNotEmpty(password)}
                autoFocus
                margin="normal"
                id="name"
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="standard"
                helperText={
                  password != null && !checkNotEmpty(password)
                    ? "This is required field"
                    : ""
                }
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <Visibility
                            sx={{ color: "rgba(248, 248, 242, 0.7)" }}
                          />
                        ) : (
                          <VisibilityOff
                            sx={{ color: "rgba(248, 248, 242, 0.7)" }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                error={
                  confirmPassword != null &&
                  !checkConfirmPassword(confirmPassword, password)
                }
                autoFocus
                margin="normal"
                id="name"
                label="Confirm password"
                type={showPassword ? "text" : "password"}
                fullWidth
                variant="standard"
                helperText={
                  confirmPassword != null &&
                  !checkConfirmPassword(confirmPassword, password)
                    ? "confirm password must similar to password"
                    : ""
                }
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? (
                          <Visibility
                            sx={{ color: "rgba(248, 248, 242, 0.7)" }}
                          />
                        ) : (
                          <VisibilityOff
                            sx={{ color: "rgba(248, 248, 242, 0.7)" }}
                          />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </ThemeProvider>
          <DialogContentText className="!text-neutral-content !mt-4">
            Already have an account?{" "}
            <button
              className="link link-hover link-accent"
              onClick={() => {
                handleClose();
                handleOpenLoginDialog();
              }}
            >
              Login here
            </button>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="!px-6 !pb-4 gap-4 items-center">
          <button id="google-btn">
            <GoogleLogin
              onSuccess={responseMessage}
              onError={errorMessage}

              // size="medium"
              // shape="pill"
              // theme="filled_blue"
            />
          </button>
          <button
            className="btn btn-accent btn-sm btn-outline"
            onClick={handleRegister}
          >
            Register
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
