import React from "react";
import { Box, Grid } from "@mui/material";
import Header from "../header";
import Sidebar from "../sidebar";

const AppLayout = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid size={{ md: 2 }} height={700}>
          <Box>
            <Sidebar />
          </Box>
        </Grid>
        <Grid size={{ md: 10 }}>
          <Box height={100}>
            <Header />
          </Box>
          <Box>{children}</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AppLayout;
