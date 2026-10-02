import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useContext } from "react";
import { JobContext } from "../../context/JobContext";
import { useNavigate } from "react-router-dom";

export const RequireDialog = () => {
  const { open, setOpen } = useContext(JobContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    setOpen(false);
    navigate("/login");
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Please Login</DialogTitle>{" "}
        <DialogContent>
          {" "}
          You need to login first to access this feature.{" "}
        </DialogContent>{" "}
        <DialogActions>
          {" "}
          <Button onClick={handleClose}>Cancel</Button>{" "}
          <Button variant="contained" onClick={handleLogin}>
            {" "}
            Login{" "}
          </Button>{" "}
        </DialogActions>
      </Dialog>
    </>
  );
};
