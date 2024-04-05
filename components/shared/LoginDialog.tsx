import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  IconButton,
  InputAdornment,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { userInfoUpdated } from "redux/userSlice";
import { useLoginGoogleMutation, useVerifyUserMutation } from "redux/apiSlice";
import { customInputAuthenTheme } from "utils/input-validate";

export default function LoginDialog({
  open,
  handleClose,
  handleOpenRegisterDialog,
}) {
  const outerTheme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const [loginGoogle] = useLoginGoogleMutation();
  const [verifyUser] = useVerifyUserMutation();

  const responseMessage = async (credentialResponse) => {
    if (credentialResponse.credential != null) {
      const response = await loginGoogle(credentialResponse).unwrap();
      const { accessToken, refreshToken } = response.payload;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      await verifyUser({ token: accessToken })
        .unwrap()
        .then((user) => {
          dispatch(userInfoUpdated({ path: "userId", value: user._id }));
          dispatch(userInfoUpdated({ path: "name", value: user.name }));
          dispatch(userInfoUpdated({ path: "email", value: user.email }));
          dispatch(userInfoUpdated({ path: "image", value: user.image }));
        });
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
            backgroundColor: "#282a36",
            color: "#f8f8f2",
            maxWidth: "650px",
          },
        }}
      >
        <DialogTitle className="flex items-center gap-4">
          <LoginIcon />
          <span>Login to your account</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="!text-primary-light">
            Please enter your username and password associated with your account
            to login and access
          </DialogContentText>
          <ThemeProvider theme={customInputAuthenTheme(outerTheme)}>
            <TextField
              autoFocus
              margin="normal"
              id="name"
              label="User Name"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              margin="normal"
              id="name"
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="standard"
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
          </ThemeProvider>
          <DialogContentText className="!text-primary-light !mt-4">
            Not have an account?{" "}
            <button
              className="text-primary-pink hover:underline"
              onClick={() => {
                handleClose();
                handleOpenRegisterDialog();
              }}
            >
              Sign up
            </button>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="!px-6 !pb-4 gap-4 items-center">
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          <button className="text-primary-white px-6 py-1.5 rounded-[4px] border-primary-light border hover:text-primary-pink hover:border-primary-pink duration-200">
            Login
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
