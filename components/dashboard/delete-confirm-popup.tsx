import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import React from "react";

export default function DeleteConfirmPopup({
  open,
  handleClose,
  handleDeleteResume,
}: {
  open: boolean;
  handleClose: () => void;
  handleDeleteResume: () => void;
}) {
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
        <DialogTitle id="alert-dialog-title">
          {"Are you sure to delete this resume?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className="!text-neutral-content"
          >
            You will not be able to recover this!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className="btn btn-ghost" onClick={handleClose}>
            Cancel
          </button>
          <button
            className="btn btn-error"
            onClick={() => {
              handleDeleteResume();
              handleClose();
            }}
            autoFocus
          >
            Delete
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
