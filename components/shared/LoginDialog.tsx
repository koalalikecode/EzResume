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
import React, { useState } from "react";
import { customInputAuthenTheme } from "@/utils/input-validate";
import { GoogleLogin } from "@react-oauth/google";
import { handleSignInWithGoogle, login } from "@/lib/authen/actions";

export default function LoginDialog({
  open,
  handleClose,
  handleOpenRegisterDialog,
}: {
  open: boolean;
  handleClose: () => void;
  handleOpenRegisterDialog: () => void;
}) {
  const outerTheme = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = () => {
    const formData = new FormData();
    if (email !== null) {
      formData.append("email", email);
    }
    if (password !== null) {
      formData.append("password", password);
    }
    login(formData);
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
          <LoginIcon />
          <span>Login to your account</span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="!text-neutral-content">
            Please enter your email and password associated with your account to
            login and access
          </DialogContentText>
          <ThemeProvider theme={customInputAuthenTheme(outerTheme)}>
            <TextField
              autoFocus
              margin="normal"
              id="email"
              label="Email"
              type="email"
              fullWidth
              variant="standard"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <TextField
              autoFocus
              margin="normal"
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              fullWidth
              variant="standard"
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
          </ThemeProvider>
          <DialogContentText className="!text-neutral-content !mt-4">
            Not have an account?{" "}
            <button
              className="link link-hover link-accent"
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
          <button
            className="btn btn-accent btn-sm btn-outline"
            onClick={handleLogin}
          >
            Login
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
