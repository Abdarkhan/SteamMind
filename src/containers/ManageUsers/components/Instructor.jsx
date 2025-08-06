import React, { useState } from "react";
import CustomTabs from "@/components/CustomTabs";
import { Box } from "@mui/material";
import CustomTable from "@/components/CustomTable";
import { ACCESS_ROLE_ROWS, INS_HEADER, INS_ROWS } from "@/constants/contents";

const Instructor = () => {
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [tableData, setTableData] = useState(ACCESS_ROLE_ROWS);

  const handleDeleteSelected = () => {
    const newRows = tableData.filter((_, i) => !selectedIndexes.includes(i));
    setTableData(newRows);
    setSelectedIndexes([]);
  };

  const Subtabs = [
    { label: "All", value: 0, children: <h1>All</h1> },
    { label: "Active", value: 1, children: <h1>Active</h1> },
    { label: "Inactive", value: 2, children: <h1>Inactive</h1> },
    { label: "Pending", value: 3, children: <h1>Pending</h1> },
    { label: "Flagged", value: 4, children: <h1>Flagged</h1> },
  ];

  return (
    <div>
      <Box my={3}>
        <CustomTabs options={Subtabs} width="70%" />
        <CustomTable
          headers={INS_HEADER}
          rows={INS_ROWS}
          onDeleteSelected={handleDeleteSelected}
        />
      </Box>
    </div>
  );
};

export default Instructor;
