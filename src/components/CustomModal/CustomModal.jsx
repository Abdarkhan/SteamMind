import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  colors,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { COLORS } from "@/constants/colors";

function CustomModal({ open, title, onClose, onSubmit, children, maxWidth, showActions = true, saveButtonText = "Save" }) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth={maxWidth || "sm"}>
      <DialogTitle>
        {title}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>{children}</DialogContent>

      {showActions && (
        <DialogActions>
          <Button
            variant="outlined"
            onClick={onClose}
            // style={{ backgroundColor: COLORS.white.offWhite, color: "black" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={onSubmit}
            style={{ backgroundColor: COLORS.pruple, color: "white" }}
          >
            {saveButtonText}  
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}

export default CustomModal;
