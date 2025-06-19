import React from "react";
import { Close } from "@mui/icons-material";
import { NAVLINKS } from "@/constants/navLinks";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Divider, IconButton, Typography } from "@mui/material";

const MobileHeader = (props) => {
  const { onToggle } = props;

  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <React.Fragment>
      <Box
        p={2}
        top={0}
        left={0}
        right={0}
        minHeight={300}
        zIndex={1000}
        padding="10px"
        position="absolute"
        bgcolor="white"
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.1)"
      >
        <Box display="flex" justifyContent="flex-end">
          <IconButton
            size="large"
            color="inherit"
            onClick={() => onToggle(false)}
          >
            <Close />
          </IconButton>
        </Box>
        <Box
          my={2}
          gap={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box height={50} width={50}>
            <img
              alt="logo"
              width="100%"
              height="100%"
              src="/assets/icons/logo.svg"
            />
          </Box>
          <Typography>STEAM Minds</Typography>
        </Box>
        <Box>
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
                  <img alt="logo" width="80%" height="80%" src={item?.icon} />
                </Box>
                <Typography width={130}>{item.title}</Typography>
              </Box>
              <Divider />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MobileHeader;
