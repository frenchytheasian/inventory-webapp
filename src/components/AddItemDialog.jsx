import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Select from "@mui/material/Select";
import DialogTitle from "@mui/material/DialogTitle";
import { MenuItem, InputLabel, FormControl } from "@mui/material";

export default function AddItemDialog({ open, setOpen }) {
  const [unit, setUnit] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {};

  const handleUnit = () => {};

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Item</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="Item Name"
            fullWidth
            variant="standard"
          />
          <TextField id="quantity" label="Quantity" variant="standard" fullWidth />
          <FormControl fullWidth variant="filled">
            <InputLabel>Unit</InputLabel>
            <Select
              value={unit}
              label="Age"
              onChange={handleUnit}
              className="unit--select"
            >
              <MenuItem value={"pc"}>Pieces</MenuItem>
              <MenuItem value={"oz"}>Ounces</MenuItem>
              <MenuItem value={"lb"}>Pounds</MenuItem>
              <MenuItem value={"cups"}>Cups</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
