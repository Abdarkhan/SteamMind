import React from "react";
import CustomTabs from "@/components/CustomTabs";
import { Box } from "@mui/material";

const AccessRole = () => {
  const Subtabs = [
    { label: "Added User", value: 0, children: <h1>All</h1> },
    { label: "Invited User", value: 1, children: <h1>Active</h1> },
    { label: "Added Role", value: 2, children: <h1>Inactive</h1> },
  ];

  return (
    <div>
        <Box my={3}>

      <CustomTabs options={Subtabs} width="40%" />
        </Box>
    </div>
  );
};

export default AccessRole;
