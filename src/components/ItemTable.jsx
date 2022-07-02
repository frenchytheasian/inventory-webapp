import React, { useState } from "react";
import Table from "@mui/material/Table";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddItemDialog from "./AddItemDialog";
import data from "../fakedata";

export default function ItemTable() {
  const [itemList, setItemList] = useState(data.data.items);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleAddClick = () => {
    setOpenAddDialog(true);
  };

  const handleDelete = (id) => {
    setItemList((prevItems) => {
      return [...prevItems].filter((item) => item.id !== id);
    });
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {itemList.map((item) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    {item.amount.quantity} {item.amount.unit}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Item
      </Button>
      {openAddDialog && (
        <AddItemDialog
          items={itemList}
          setItems={setItemList}
          open={openAddDialog}
          setOpen={setOpenAddDialog}
        />
      )}
    </>
  );
}
