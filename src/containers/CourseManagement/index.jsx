import React, { useState } from "react";
import {
  Grid,
  Chip,
  MenuItem,
  Select,
  Button,
  FormControl,
  InputLabel,
  Menu,
  TextField,
  Box,
  Typography,
  Link,
} from "@mui/material";
import Hero from "@/components/Hero";
import { COLORS } from "@/constants/colors";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CourseCard from "./components/CourseCard";
import { COURSEARRAYDATA } from "@/constants/contents";
import CustomModal from "@/components/CustomModal/CustomModal";

const categories = ["IT", "Marketing", "HR"];
const statuses = ["Active", "Inactive"];
const prices = ["Low", "Medium", "High"];

const ManageCourseContainer = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    category: "",
    status: "",
    price: "",
  });

  const handleChange = (key, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClearAll = () => {
    setSelectedFilters({
      category: "",
      status: "",
      price: "",
    });
  };

  const handleDelete = (key) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: "",
    }));
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const handleOpenModal = (type) => {
    setModalType(type);
    setModalOpen(true);
    setAnchorEl(null);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setModalType("");
  };

  const renderModalContent = () => {
    switch (modalType) {
      case "Create_Category":
        return (
          <>
            <Grid container spacing={1}>
              <Grid
                item
                size={{ xs: 12, md: 11.5 }}
                display={"flex"}
                flexDirection={"row-reverse"}
              >
                {/* <Button
                  variant="contained"
                  style={{ backgroundColor: COLORS.pruple, color: "white" }}
                  onClick={() => handleOpenModal("New_Course")}
                >
                  Add Course
                </Button> */}
              </Grid>
              <Grid item size={{ xs: 12, md: 10 }}>
                <TextField
                  label="Enter Category"
                  fullWidth
                  size="small"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 2 }} mt={{ xs: 0, md: 2 }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: COLORS.pruple, color: "white" }}
                >
                  Add
                </Button>
              </Grid>
              {/* Sub Category */}
              <Grid item size={{ xs: 12, md: 10 }}>
                <TextField
                  label="Enter Sub Category"
                  fullWidth
                  size="small"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 2 }} mt={{ xs: 0, md: 2 }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: COLORS.pruple, color: "white" }}
                >
                  Add
                </Button>
              </Grid>
              {/* Level */}
              <Grid item size={{ xs: 12, md: 10 }}>
                <TextField
                  label="Enter Level"
                  fullWidth
                  size="small"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 2 }} mt={{ xs: 0, md: 2 }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: COLORS.pruple, color: "white" }}
                >
                  Add
                </Button>
              </Grid>
              {/* Age Group */}
              <Grid item size={{ xs: 12, md: 10 }}>
                <TextField
                  label="Enter Age Group"
                  fullWidth
                  size="small"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 2 }} mt={{ xs: 0, md: 2 }}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: COLORS.pruple, color: "white" }}
                >
                  Add
                </Button>
              </Grid>
              {/* <Grid
                item
                size={{ xs: 12, md: 11.5 }}
                display={"flex"}
                flexDirection={"row-reverse"}
              >
                <Button variant="outlined">Cancel</Button>
              </Grid> */}
            </Grid>
          </>
        );
      case "New_Course":
        return (
          <>
            {/* Course Thumbnail Upload */}
            <Box
              sx={{
                border: "2px dashed #ccc",
                padding: 2,
                textAlign: "center",
                marginBottom: 2,
              }}
            >
              <Typography>
                Drag & drop your image here or <Link>browse</Link>
              </Typography>
              <Typography variant="caption">
                Supported formats: JPG, PNG
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField
                  label="Course Title"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Level</InputLabel>
                  <Select defaultValue="">
                    <MenuItem value="Beginner">Beginner</MenuItem>
                    <MenuItem value="Intermediate">Intermediate</MenuItem>
                    <MenuItem value="Advanced">Advanced</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Course Category</InputLabel>
                  <Select defaultValue="">
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Status</InputLabel>
                  <Select defaultValue="">
                    <MenuItem value="Published">Published</MenuItem>
                    <MenuItem value="Draft">Draft</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Sub Category</InputLabel>
                  <Select defaultValue="">
                    <MenuItem value="Sub1">Sub1</MenuItem>
                    <MenuItem value="Sub2">Sub2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Age Group</InputLabel>
                  <Select defaultValue="">
                    <MenuItem value="5-10">5-10</MenuItem>
                    <MenuItem value="11-15">11-15</MenuItem>
                    <MenuItem value="16+">16+</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              {/* Course Outline PDF Upload */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    border: "2px dashed #ccc",
                    padding: 2,
                    textAlign: "center",
                    marginTop: 2,
                  }}
                >
                  <Typography>
                    Drag & drop your PDF here or <Link>browse</Link>
                  </Typography>
                  <Typography variant="caption">
                    Only PDF format is supported
                  </Typography>
                </Box>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField
                  label="Access"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Grid>
            </Grid>
          </>
        );

      case "Create_Bundle":
        return (
          <>
            <Grid container spacing={2}>
              {/* Add Thumbnail */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    border: "2px dashed #ccc",
                    padding: 3,
                    textAlign: "center",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body1">
                    Drag & drop your image here or <Link>browse</Link>
                  </Typography>
                  <Typography variant="caption">
                    Supported formats: JPG, PNG
                  </Typography>
                </Box>
              </Grid>

              {/* Course Outline */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    border: "2px dashed #ccc",
                    padding: 3,
                    textAlign: "center",
                    borderRadius: 2,
                  }}
                >
                  <Typography variant="body1">
                    Drag & drop your PDF here or <Link>browse</Link>
                  </Typography>
                  <Typography variant="caption">
                    Only PDF format is supported
                  </Typography>
                </Box>
              </Grid>

              {/* Bundle Name */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField
                  label="Bundle Name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Grid>

              {/* Price */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField
                  label="Price"
                  fullWidth
                  type="number"
                  variant="outlined"
                  margin="normal"
                />
              </Grid>

              {/* Category */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel>Category</InputLabel>
                  <Select defaultValue="">
                    {categories.map((cat) => (
                      <MenuItem key={cat} value={cat}>
                        {cat}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Age Group */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel>Age Group</InputLabel>
                  <Select defaultValue="">
                    <MenuItem value="5-10">5-10</MenuItem>
                    <MenuItem value="11-15">11-15</MenuItem>
                    <MenuItem value="16+">16+</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              {/* Status */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <InputLabel>Status</InputLabel>
                  <Select defaultValue="">
                    {statuses.map((status) => (
                      <MenuItem key={status} value={status}>
                        {status}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Access */}
              <Grid item size={{ xs: 12, md: 6 }}>
                <TextField
                  label="Access"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Grid>

              {/* Description */}
              <Grid item size={{ xs: 12 }}>
                <TextField
                  label="Description"
                  multiline
                  rows={3}
                  fullWidth
                  variant="outlined"
                  margin="normal"
                />
              </Grid>

              {/* Add Course Module Button */}
              <Grid item size={{ xs: 12 }}>
                <Box
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: 2,
                    p: 2,
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  <Button
                    variant="outlined"
                    // startIcon={<KeyboardArrowDownIcon />}
                    fullWidth
                    sx={{ justifyContent: "flex-start", color: COLORS.pruple }}
                  >
                    + Add Course Module
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Hero title="ManageCourseContainer" />
      <Grid sx={{ p: 2 }}>
        {/* Dropdown Filters */}
        <Grid sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <FormControl size="small">
            <InputLabel>All Categories</InputLabel>
            <Select
              value={selectedFilters.category}
              label="All Categories"
              onChange={(e) => handleChange("category", e.target.value)}
              style={{ borderRadius: "50px", padding: "0 15px" }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" style={{ width: "130px" }}>
            <InputLabel>All Status</InputLabel>
            <Select
              value={selectedFilters.status}
              label="All Status"
              onChange={(e) => handleChange("status", e.target.value)}
              style={{ borderRadius: "50px", padding: "0 15px" }}
            >
              {statuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small" style={{ width: "134px" }}>
            <InputLabel>Price Range</InputLabel>
            <Select
              value={selectedFilters.price}
              label="Price Range"
              onChange={(e) => handleChange("price", e.target.value)}
              style={{ borderRadius: "50px", padding: "0 15px" }}
            >
              {prices.map((price) => (
                <MenuItem key={price} value={price}>
                  {price}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            variant="outlined"
            onClick={handleClearAll}
            style={{ borderRadius: "50px", padding: "0 15px" }}
          >
            Clear Filters
          </Button>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{ mt: 2, justifyContent: "space-between" }}
        >
          {/* Filter Chips */}
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            sx={{
              mt: 2,
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
            }}
          >
            {selectedFilters.category && (
              <Chip
                label={selectedFilters.category}
                onDelete={() => handleDelete("category")}
                color="secondary"
              />
            )}
            {selectedFilters.status && (
              <Chip
                label={selectedFilters.status}
                onDelete={() => handleDelete("status")}
                color="success"
              />
            )}
            {selectedFilters.price && (
              <Chip
                label={selectedFilters.price}
                onDelete={() => handleDelete("price")}
                color="primary"
              />
            )}
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              mt: 2,
              display: "flex",
              gap: 1,
              flexDirection: "row-reverse",
            }}
          >
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
                <MenuItem onClick={() => handleOpenModal("Create_Category")}>
                  Create a User
                </MenuItem>
                <MenuItem onClick={() => handleOpenModal("New_Course")}>
                  Add New Course
                </MenuItem>
                <MenuItem onClick={() => handleOpenModal("Create_Bundle")}>
                  Create Bundle
                </MenuItem>
              </Menu>
            </Grid>

            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ backgroundColor: COLORS.pruple, color: "white" }}
            >
              Apply Filters
            </Button>
            <Button
              variant="contained"
              color="primary"
              size="small"
              sx={{ backgroundColor: COLORS.pruple, color: "white" }}
            >
              Add Course
            </Button>
          </Grid>

          {/* Cards */}
          <Grid item xs={12} display="flex" flexWrap="wrap" gap={2}>
            {COURSEARRAYDATA.map((item, index) => (
              <CourseCard key={index} item={item}
               onEdit={() => handleOpenModal("New_Course")}
                />
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Modal */}
      <CustomModal
        open={modalOpen}
        onClose={handleCloseModal}
        onSubmit={() => {
          console.log("Submitted:", modalType);
          handleCloseModal();
        }}
        // showActions={modalType !== "Create_Category"}
        title={
          // modalType === "New_Course"
          // ? "Add Course"
          // : modalType === "Create_Category"
          // ? "Define Category, Subject and Level"
          // : modalType === "Create_Bundle"
          // ? "Create Course Bundle"
          // : ""
          modalType === "Create_Category"
            ? "Define Category, Subject and Level"
            : modalType === "New_Course"
            ? "Add Course"
            : modalType === "Create_Bundle"
            ? "Create Course Bundle"
            : ""
        }
        saveButtonText={
          modalType === "New_Course"
            ? "Create Course"
            : modalType === "Create_Bundle"
            ? "Create Bundle"
            : modalType === "Create_Category"
            ? "Save"
            : "xvb"
        }
      >
        {renderModalContent()}
      </CustomModal>
    </>
  );
};

export default ManageCourseContainer;
