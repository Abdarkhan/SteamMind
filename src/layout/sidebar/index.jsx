import React from "react";
import { COLORS } from "@/constants/colors";
import { NAVLINKS } from "@/constants/navLinks";
import { Box, Divider, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const height = window.innerHeight;
  return (
    <>
      <Box height={height} bgcolor={COLORS.white.offWhite}>
        <Box display="flex" justifyContent="center" alignItems="center" gap={1}>
          <Box height={72} width={50}>
            <img
              alt="logo"
              width="100%"
              height="100%"
              src="/assets/icons/logo.svg"
            />
          </Box>
          <Typography>STEAM Minds</Typography>
        </Box>

        {NAVLINKS.map((item) => (
          <React.Fragment key={item.url}>
            <Box
              gap={1}
              height={65}
              color={item.url === pathname ? "white" : "black"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              onClick={() => navigate(item?.url)}
              bgcolor={item.url === pathname ? COLORS.pruple : ""}
            >
              <Box height={36} width={36} alignItems={"center"}>
                <img alt="logo" width="80%" height="80%" src={item?.icon} />
              </Box>
              <Typography width={130}>{item.title}</Typography>
            </Box>
            <Divider />
          </React.Fragment>
        ))}
      </Box>
    </>
  );
};

export default Sidebar;
