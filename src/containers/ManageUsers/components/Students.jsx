import React from "react";
import CustomTabs from "@/components/CustomTabs";
import { Box } from "@mui/material";
import CustomTable from "@/components/CustomTable";
import { STD_HEADER, STD_ROWS } from "@/constants/contents";

const Students = () => {
  const Subtabs = [
    { label: "All", value: 0, children: <h1>All</h1> },
    { label: "Active", value: 1, children: <h1>Active</h1> },
    { label: "Inactive", value: 2, children: <h1>Inactive</h1> },
  ];

  return (
    <div>
      <Box my={3}>
        <CustomTabs options={Subtabs} width="35%" />
        <CustomTable headers={STD_HEADER} rows={STD_ROWS} />
      </Box>
    </div>
  );
};

export default Students;
