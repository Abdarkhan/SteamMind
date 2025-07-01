import React, { useState } from "react";
import CustomTabs from "@/components/CustomTabs";
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Button,
  Menu,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CustomTable from "@/components/CustomTable";
import { ACCESS_ROLE_HEADER, ACCESS_ROLE_ROWS } from "@/constants/contents";
import { styled, alpha } from "@mui/material/styles";
import { COLORS } from "@/constants/colors";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const AccessRole = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  // Menu state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const Subtabs = [
    { label: "Added User", value: 0, children: <h1>All</h1> },
    { label: "Invited User", value: 1, children: <h1>Active</h1> },
    { label: "Added Role", value: 2, children: <h1>Inactive</h1> },
  ];

  return (
    <div>
      <Box my={3}>
        <CustomTabs options={Subtabs} width="40%" />

        <Grid
          container
          display={"flex"}
          justifyContent={"space-between"}
          alignItems="center"
          mt={3}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth sx={{ minWidth: 80 }} size="small">
                <InputLabel id="role-select-label">Role</InputLabel>
                <Select
                  labelId="role-select-label"
                  id="role-select"
                  value={selectedRole}
                  label="Role"
                  onChange={handleRoleChange}
                >
                  <MenuItem value="Instructor">Instructor</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Viewer">Viewer</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <FormControl fullWidth sx={{ minWidth: 85 }} size="small">
                <InputLabel id="status-select-label">Status</InputLabel>
                <Select
                  labelId="status-select-label"
                  id="status-select"
                  value={selectedStatus}
                  label="Status"
                  onChange={handleStatusChange}
                >
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="inactive">Inactive</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={6} md={4} textAlign="right">
            <Button
              // variant="contained"
              disableElevation
              onClick={handleMenuClick}
              endIcon={<KeyboardArrowDownIcon />}
              style={{
                backgroundColor: COLORS.pruple,
                color: "white",
              }}
            >
              Options
            </Button>
            <StyledMenu
              anchorEl={anchorEl}
              open={open}
              onClose={handleMenuClose}
              MenuListProps={{
                "aria-labelledby": "options-button",
              }}
             
            >
              <MenuItem onClick={handleMenuClose} disableRipple 
               style={{ 
                backgroundColor: COLORS.grey.main
              }}>
                Create User
              </MenuItem>
              <MenuItem onClick={handleMenuClose} disableRipple  style={{ 
                backgroundColor: COLORS.grey.main
              }}>
                Create Role
              </MenuItem>
              {/* <Divider sx={{ my: 0.5 }} /> */}
              <MenuItem onClick={handleMenuClose} disableRipple  style={{ 
                backgroundColor: COLORS.grey.main
              }}>
                Assigned Role
              </MenuItem>
            </StyledMenu>
          </Grid>
        </Grid>

        <CustomTable headers={ACCESS_ROLE_HEADER} rows={ACCESS_ROLE_ROWS} />
      </Box>
    </div>
  );
};

export default AccessRole;
