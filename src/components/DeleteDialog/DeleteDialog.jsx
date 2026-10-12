import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
} from "@mui/material";
import { useState } from "react";
import styles from "./deleteDialog.module.css";

export const DeleteDialog = ({ jobId, onDelete, trigger }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const handleClose = () => {
    setOpenDeleteDialog(false);
  };

  const handleDelete = async () => {
    await onDelete(jobId);
    handleClose();
  };

  return (
    <>
      <span className={styles.trashIcon}>
        <span onClick={() => setOpenDeleteDialog(true)}>{trigger}</span>
      </span>

      <Dialog open={openDeleteDialog} onClose={handleClose}>
        <DialogTitle>Confirm Delete</DialogTitle>

        <DialogContent>Are you sure you want to delete this job?</DialogContent>

        <DialogActions className={styles.deleteActions}>
          <button className={styles.cancelButton} onClick={handleClose}>
            Cancel
          </button>
          <button className={styles.deleteButton} onClick={handleDelete}>
            Delete
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
};
