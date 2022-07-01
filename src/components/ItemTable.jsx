import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import AddItemDialog from "./AddItemDialog";
import data from "../fakedata";

export default function ItemTable() {
  const [itemList, setItemList] = useState(data.data.items);
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const handleAddClick = () => {
    setOpenAddDialog(true);
    console.log(openAddDialog);
  };

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Amount</TableCell>
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
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" onClick={handleAddClick}>
        Add Item
      </Button>
      {openAddDialog && <AddItemDialog open={openAddDialog} setOpen={setOpenAddDialog}/>}
    </>
  );
}
