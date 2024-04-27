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

export default function AccountSettingDialog({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const outerTheme = useTheme();
  const [ava, setAva] = useState<File | null>(null);
  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiDialog-paper": {
            backgroundColor: "oklch(17.8606% 0.034249 265.754874)",
            color: "oklch(84.1536% 0.007965 265.754874)",
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
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <input
              type="file"
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
            onClick={() => {}}
          >
            Cancel
          </button>
          <button className="btn btn-success btn-sm" onClick={() => {}}>
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
