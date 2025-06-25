import React from "react";
import CustomTabs from "@/components/CustomTabs";
import { Box } from "@mui/material";

const Instructor = () => {
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
        </Box>
    </div>
  );
};

export default Instructor;
