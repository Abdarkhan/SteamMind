import React from "react";
import Header from "../header";
import Sidebar from "../sidebar";
import { Box, Grid } from "@mui/material";
import MobileHeader from "../mobileHeader";

const AppLayout = ({ children }) => {
  return (
    <>
      <Grid container>
        <Grid
          height={700}
          size={{ md: 2, sm: 3 }}
          display={{ xs: "none", md: "block" }}
        >
          <Box>
            <Sidebar />
          </Box>
        </Grid>
        {/* <Grid size={{ md: 2, sm: 3 }} display={{ xs: "block", md: "none" }}>
          <Box>
            <MobileHeader />
          </Box>
        </Grid> */}
        <Grid size={{ md: 10, sm: 12, xs: 12 }}>
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
