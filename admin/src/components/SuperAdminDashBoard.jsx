import React, { lazy } from "react";

const BtnLogout = lazy(() => import("../buttons/BtnLogout"));

const SuperAdminDashboard = () => {
  return (
    <>
      <h1>Super Admin Dashboard</h1>
      <BtnLogout />
    </>
  );
};

export default SuperAdminDashboard;
