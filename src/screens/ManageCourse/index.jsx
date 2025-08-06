import React from "react";
import AppLayout from "@/layout/AppLayout";
import ManageCourseContainer from "@/containers/CourseManagement";

const ManageCourse = () => {
  return (
    <AppLayout>
      <ManageCourseContainer />
    </AppLayout>
  );
};

export default ManageCourse;
