import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

export default function AddItemDialog({ setItems, open, setOpen }) {
  const [unit, setUnit] = useState("pc");
  const [quantity, setQuantity] = useState("");
  const [name, setName] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const handleAdd = () => {
    setItems((prevItems) => {
      const newItem = {
        id: prevItems.length + 1,
        name,
        amount: { unit, quantity },
      };
      return [...prevItems, newItem];
    });
  };

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
            onChange={(evt) => setName(evt.target.value)}
          />
          <TextField
            id="quantity"
            label="Quantity"
            variant="standard"
            fullWidth
            onChange={(evt) => setQuantity(evt.target.value)}
          />
          <FormControl fullWidth variant="filled">
            <InputLabel>Unit</InputLabel>
            <Select
              value={unit}
              label="Age"
              onChange={(evt) => setUnit(evt.target.value)}
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
