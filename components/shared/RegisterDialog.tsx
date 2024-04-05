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
import React, { useState } from "react";
import { useAppDispatch } from "redux/hooks";
import { userInfoUpdated } from "redux/userSlice";
import { useLoginGoogleMutation, useVerifyUserMutation } from "redux/apiSlice";
import {
  checkConfirmPassword,
  checkNotEmpty,
  customInputAuthenTheme,
} from "utils/input-validate";

export default function RegisterDialog({
  open,
  handleClose,
  handleOpenLoginDialog,
}) {
  const outerTheme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
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
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

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
          <PersonAddAlt1Icon />
          <span>Create an account</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="!text-primary-light w-[600px]">
            Please enter your personal information to create an account.
          </DialogContentText>
          <ThemeProvider theme={customInputAuthenTheme(outerTheme)}>
            <div className="flex gap-4">
              <TextField
                error={userName != null && !checkNotEmpty(userName)}
                autoFocus
                margin="normal"
                id="username"
                label="User Name"
                type="text"
                fullWidth
                variant="standard"
                helperText={
                  userName != null && !checkNotEmpty(userName)
                    ? "This is required field"
                    : ""
                }
                onChange={(e) => {
                  setUserName(e.target.value);
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
                type={showConfirmPassword ? "text" : "password"}
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
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showConfirmPassword ? (
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
          <DialogContentText className="!text-primary-light !mt-4">
            Already have an account?{" "}
            <button
              className="text-primary-pink hover:underline"
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
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          <button className="text-primary-white px-6 py-1.5 rounded-[4px] border-primary-light border hover:text-primary-pink hover:border-primary-pink duration-200">
            Register
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
