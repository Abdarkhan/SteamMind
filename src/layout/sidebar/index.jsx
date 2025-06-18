import React from "react";
import { COLORS } from "@/constants/colors";
import { Box, Divider, Typography } from "@mui/material";
import { NAVLINKS } from "@/constants/navLinks";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <>
      <Box bgcolor={COLORS.white.offWhite} height={800}>
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
              bgcolor={item.url === pathname ? "#923D8C" : ""}
            >
              <Box height={36} width={36} alignItems={"center"}>
                <img
                  alt="logo"
                  width="80%"
                  height="80%"
                  src={item?.icon}
                />
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
