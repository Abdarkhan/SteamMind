import Header from "../header";
import Sidebar from "../sidebar";
import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import MobileHeader from "../mobileHeader";

const AppLayout = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const onToggle = (val) => {
    setToggle(val);
  };
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
        <Grid size={{ md: 2, sm: 3 }} display={{ xs: "block", md: "none" }}>
          {toggle && (
            <Box>
              <MobileHeader onToggle={onToggle} />
            </Box>
          )}
        </Grid>
        <Grid size={{ md: 10, sm: 12, xs: 12 }}>
          <Box height={100}>
            <Header onToggle={onToggle} toggle={toggle} />
          </Box>
          <Box px={4}>{children}</Box>
        </Grid>
      </Grid>
    </>
  );
};

export default AppLayout;
