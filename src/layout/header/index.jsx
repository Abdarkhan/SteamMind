import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Box,
  Avatar,
  Badge,
  IconButton,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Close, MenuOpenOutlined } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 50,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  border: "1px solid #ccc",
  marginLeft: 0,
  width: "100%",
  display: "flex",
  alignItems: "center",
  padding: "5px 15px",
  [theme.breakpoints.up("sm")]: {
    width: "400px",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  paddingLeft: theme.spacing(1),
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#800080",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    paddingLeft: theme.spacing(1),
  },
}));

const Header = (props) => {
  const { onToggle, toggle } = props;

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      style={{ boxShadow: "1px 0px 0px 1px #ccc" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Left - Title */}
        <Typography
          fontWeight="bold"
          color="text.primary"
          fontSize={{ md: 15, sm: 14, xs: 12 }}
        >
          Admin Dashboard
        </Typography>

        {/* Middle - Search */}
        <Search
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <StyledInputBase
            placeholder="Search here"
            inputProps={{ "aria-label": "search" }}
          />
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
        </Search>

        {/* Right - Notifications and Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar alt="Alexander Wright" src="https://i.pravatar.cc/300" />
          <Typography
            color="text.primary"
            display={{ xs: "none", sm: "block" }}
            fontSize={{ md: 15, sm: 12, xs: 12 }}
          >
            Alexander Wright
          </Typography>
          <Box
            component={IconButton}
            sx={{ display: { xs: "block", sm: "none" } }}
            onClick={() => onToggle(toggle ? false : true)}
          >
            {toggle ? <Close /> : <MenuOpenOutlined color="error" />}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
