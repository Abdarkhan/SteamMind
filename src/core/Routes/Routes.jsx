import { ROUTES } from "@/constants/routes";
import ManageCourse from "@/screens/ManageCourse";
import ManageUsers from "@/screens/ManageUsers";
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
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

