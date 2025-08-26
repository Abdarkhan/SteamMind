import { ROUTES } from "@/constants/routes";
import ViewDetails from "@/containers/CourseManagement/components/ViewDetails";
import ManageCourse from "@/screens/ManageCourse";
import ManageRequest from "@/screens/ManageRequest";
import ManageUsers from "@/screens/ManageUsers";
import { Details } from "@mui/icons-material";
import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Lazy loaded pages
const Dashboard = lazy(() => import("@/screens/Dashboard"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={ROUTES.HOME} element={<Dashboard />} />
        <Route path={ROUTES.USERS} element={<ManageUsers />} />
        <Route path={ROUTES.COURSE} element={<ManageCourse />} />
        <Route path={ROUTES.REQUEST} element={<ManageRequest />} />
        <Route path={ROUTES.COURSE_DETAILS} element={<ViewDetails />} />
        {/* <Route path="/course-details/:id" element={<ViewDetails />} /> */}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

