import React from "react";
import CustomTabs from "@/components/CustomTabs";
import Hero from "@/components/Hero";
import { COLORS } from "@/constants/colors";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

const ManageRequestContainer = () => {
  const tabs = [
    { label: "Student Demo Request", value: 0, children: "sss" },
    { label: "Student Live Session Request", value: 1, children: "aaas" },
    { label: "Instructor Request", value: 2, children: "ccc" },
  ];
  return (
    <>
      <Hero title="Manage Request" />
      <Grid container spacing={2} mt={2}>
        <Grid item size={{ xs: 12, md: 9 }}>
          <CustomTabs options={tabs} isChild width={"100%"} />
        </Grid>
        <Grid
          item
          size={{ xs: 12, md: 3 }}
          display={"flex"}
          flexDirection={"row-reverse"}
          height={"fit-content"}
        >
          <Button
            variant="contained"
            size="small"
            color="primary"
            style={{ backgroundColor: COLORS.pruple }}
            startIcon={<RefreshIcon fontSize="small" />}
          >
            Refresh Request
          </Button>
        </Grid>
      </Grid>
      <Grid display="flex" alignItems="center" gap={4}>
        {/* Date Filter */}
        <FormControl size="small" variant="outlined">
          <InputLabel>Date</InputLabel>
          <Select defaultValue="last7" label="Date">
            <MenuItem value="last7">Last 7 Days</MenuItem>
            <MenuItem value="last30">Last 30 Days</MenuItem>
            <MenuItem value="custom">Custom Range</MenuItem>
          </Select>
        </FormControl>

        {/* Course Filter */}
        <FormControl size="small" variant="outlined">
          <InputLabel>Course</InputLabel>
          <Select defaultValue="all" label="Course">
            <MenuItem value="all">All Courses</MenuItem>
            <MenuItem value="course1">Course 1</MenuItem>
            <MenuItem value="course2">Course 2</MenuItem>
          </Select>
        </FormControl>

        {/* Status Filter */}
        <FormControl size="small" variant="outlined">
          <InputLabel>Status</InputLabel>
          <Select defaultValue="all" label="Status">
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </>
  );
};

export default ManageRequestContainer;
