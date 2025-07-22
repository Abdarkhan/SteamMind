// import React, { useState } from "react";
// import CustomTabs from "@/components/CustomTabs";
// import {
//   Box,
//   FormControl,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
//   Button,
//   Menu,
//   Divider,
// } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import ArchiveIcon from "@mui/icons-material/Archive";
// import FileCopyIcon from "@mui/icons-material/FileCopy";
// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import CustomTable from "@/components/CustomTable";
// import { ACCESS_ROLE_HEADER, ACCESS_ROLE_ROWS } from "@/constants/contents";
// import { styled, alpha } from "@mui/material/styles";
// import { COLORS } from "@/constants/colors";

// const StyledMenu = styled((props) => (
//   <Menu
//     elevation={0}
//     anchorOrigin={{
//       vertical: "bottom",
//       horizontal: "right",
//     }}
//     transformOrigin={{
//       vertical: "top",
//       horizontal: "right",
//     }}
//     {...props}
//   />
// ))(({ theme }) => ({
//   "& .MuiPaper-root": {
//     borderRadius: 6,
//     marginTop: theme.spacing(1),
//     minWidth: 180,
//     color: "rgb(55, 65, 81)",
//     boxShadow:
//       "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
//     "& .MuiMenu-list": {
//       padding: "4px 0",
//     },
//     "& .MuiMenuItem-root": {
//       "& .MuiSvgIcon-root": {
//         fontSize: 18,
//         color: theme.palette.text.secondary,
//         marginRight: theme.spacing(1.5),
//       },
//       "&:active": {
//         backgroundColor: alpha(
//           theme.palette.primary.main,
//           theme.palette.action.selectedOpacity
//         ),
//       },
//     },
//   },
// }));

// const AccessRole = () => {
//   const [selectedRole, setSelectedRole] = useState("");
//   const [selectedStatus, setSelectedStatus] = useState("");

//   const handleRoleChange = (event) => {
//     setSelectedRole(event.target.value);
//   };

//   const handleStatusChange = (event) => {
//     setSelectedStatus(event.target.value);
//   };

//   // Menu state
//   const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);
//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   const Subtabs = [
//     { label: "Added User", value: 0, children: <h1>All</h1> },
//     { label: "Invited User", value: 1, children: <h1>Active</h1> },
//     { label: "Added Role", value: 2, children: <h1>Inactive</h1> },
//   ];

//   return (
//     <div>
//       <Box my={3}>
//         <CustomTabs options={Subtabs} width="40%" />

//         <Grid
//           container
//           display={"flex"}
//           justifyContent={"space-between"}
//           alignItems="center"
//           mt={3}
//         >
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6} md={4}>
//               <FormControl fullWidth sx={{ minWidth: 80 }} size="small">
//                 <InputLabel id="role-select-label">Role</InputLabel>
//                 <Select
//                   labelId="role-select-label"
//                   id="role-select"
//                   value={selectedRole}
//                   label="Role"
//                   onChange={handleRoleChange}
//                 >
//                   <MenuItem value="Instructor">Instructor</MenuItem>
//                   <MenuItem value="Admin">Admin</MenuItem>
//                   <MenuItem value="Viewer">Viewer</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>

//             <Grid item xs={12} sm={6} md={4}>
//               <FormControl fullWidth sx={{ minWidth: 85 }} size="small">
//                 <InputLabel id="status-select-label">Status</InputLabel>
//                 <Select
//                   labelId="status-select-label"
//                   id="status-select"
//                   value={selectedStatus}
//                   label="Status"
//                   onChange={handleStatusChange}
//                 >
//                   <MenuItem value="active">Active</MenuItem>
//                   <MenuItem value="inactive">Inactive</MenuItem>
//                 </Select>
//               </FormControl>
//             </Grid>
//           </Grid>

//           <Grid item xs={12} sm={6} md={4} textAlign="right">
//             <Button
//               // variant="contained"
//               disableElevation
//               onClick={handleMenuClick}
//               endIcon={<KeyboardArrowDownIcon />}
//               style={{
//                 backgroundColor: COLORS.pruple,
//                 color: "white",
//               }}
//             >
//               Options
//             </Button>
//             <StyledMenu
//               anchorEl={anchorEl}
//               open={open}
//               onClose={handleMenuClose}
//               MenuListProps={{
//                 "aria-labelledby": "options-button",
//               }}

//             >
//               <MenuItem onClick={handleMenuClose} disableRipple
//                style={{
//                 backgroundColor: COLORS.grey.main
//               }}>
//                 Create User
//               </MenuItem>
//               <MenuItem onClick={handleMenuClose} disableRipple  style={{
//                 backgroundColor: COLORS.grey.main
//               }}>
//                 Create Role
//               </MenuItem>
//               {/* <Divider sx={{ my: 0.5 }} /> */}
//               <MenuItem onClick={handleMenuClose} disableRipple  style={{
//                 backgroundColor: COLORS.grey.main
//               }}>
//                 Assigned Role
//               </MenuItem>
//             </StyledMenu>
//           </Grid>
//         </Grid>

//         <CustomTable headers={ACCESS_ROLE_HEADER} rows={ACCESS_ROLE_ROWS} />
//       </Box>
//     </div>
//   );
// };

// export default AccessRole;

import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Button,
  Grid,
  Menu,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ACCESS_ROLE_HEADER, ACCESS_ROLE_ROWS } from "@/constants/contents";
import CustomTabs from "@/components/CustomTabs";
import CustomTable from "@/components/CustomTable";
import { COLORS } from "@/constants/colors";
import CustomModal from "@/components/CustomModal/CustomModal";

const AccessRole = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [assignValue, setAssignValue] = useState("");
  const [rolePermission, setRolePermission] = useState([]);
  const [rolePermissionsAssigned, setRolePermissionsAssigned] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState(""); // 'user', 'role', 'assign'

  const handleOpenModal = (type) => {
    setModalType(type);
    setModalOpen(true);
    setAnchorEl(null); // Close menu
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalType("");
  };

  const handleSave = () => {
    console.log("Saving data for:", modalType);
    setModalOpen(false);
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  const Subtabs = [
    { label: "Added User", value: 0, children: <h1>All</h1> },
    { label: "Invited User", value: 1, children: <h1>Active</h1> },
    { label: "Added Role", value: 2, children: <h1>Inactive</h1> },
  ];

  const renderModalContent = () => {
    switch (modalType) {
      case "user":
        return (
          <>
            <Grid item xs={12}>
              <TextField
                fullWidth
                variant="filled"
                margin="normal"
                label="Email"
              />
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  margin="normal"
                  label="Password"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant="filled"
                  margin="normal"
                  label="Confirm Password"
                />
              </Grid>
            </Grid>
          </>
        );
      case "role":
        return (
          <>
            <Grid>
              <Typography variant="h6">Role Name</Typography>
              <TextField
                fullWidth
                margin="normal"
                size="small"
                variant="filled"
              />
            </Grid>
            <Grid>
              <Typography variant="h6">Role Description</Typography>
              <TextField
                fullWidth
                margin="normal"
                size="small"
                multiline
                variant="filled"
              />
            </Grid>
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6">Select Permissions</Typography>
              <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
                <Select
                  value={rolePermission}
                  onChange={(e) => setRolePermission(e.target.value)}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="student">Student</MenuItem>
                  <MenuItem value="instructor">Instructor</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </>
        );
      case "assign":
        return (
          <>
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6">Assign Role</Typography>
              <FormControl fullWidth margin="normal">
                <InputLabel>Assign To</InputLabel>
                <Select
                  value={assignValue}
                  onChange={(e) => setAssignValue(e.target.value)}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="viewer">Viewer</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid>
              <Typography variant="h6">Role Description</Typography>
              <TextField
                fullWidth
                margin="normal"
                size="small"
                multiline
                variant="filled"
              />
            </Grid>
            <Grid container display={"flex"} justifyContent={"space-between"}>
              <Grid item sm={4}>
                <Typography variant="h6">Select Permissions</Typography>
                <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
                  <Select
                    value={rolePermissionsAssigned}
                    onChange={(e) => setRolePermissionsAssigned(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="instructor">Instructor</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item sm={4}>
                <Typography variant="h6">Email Address</Typography>
                <FormControl sx={{ m: 1, minWidth: 260 }} size="small">
                  <Select
                    value={rolePermissionsAssigned}
                    onChange={(e) => setRolePermissionsAssigned(e.target.value)}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="student">Student</MenuItem>
                    <MenuItem value="instructor">Instructor</MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                  </Select>
                </FormControl>
              </Grid> */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  Email Address
                </Typography>
                <TextField
                  fullWidth
                  size="small"
                  variant="filled"
                  // label="Email"
                />
              </Grid>
            </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Box my={3}>
      <CustomTabs options={Subtabs} width="60%" />

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
            endIcon={<KeyboardArrowDownIcon />}
            onClick={(e) => setAnchorEl(e.currentTarget)}
            style={{ backgroundColor: COLORS.pruple, color: "white" }}
          >
            Options
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            <MenuItem onClick={() => handleOpenModal("user")}>
              Create User
            </MenuItem>
            <MenuItem onClick={() => handleOpenModal("role")}>
              Create Role
            </MenuItem>
            <MenuItem onClick={() => handleOpenModal("assign")}>
              Assigned Role
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>

      <CustomTable headers={ACCESS_ROLE_HEADER} rows={ACCESS_ROLE_ROWS} />

      {/* Modal Usage */}
      <CustomModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSave}
        title={
          modalType === "user"
            ? "Create User"
            : modalType === "role"
            ? "Create Role"
            : "Assign Role"
        }
      >
        {renderModalContent()}
      </CustomModal>
    </Box>
  );
};

export default AccessRole;
