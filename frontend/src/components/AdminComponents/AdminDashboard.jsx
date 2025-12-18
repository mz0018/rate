import React, { lazy, Suspense } from "react";

const AdminNavbar = lazy(() => import("../AdminComponents/AdminNavbar"));
const AdminSidebar = lazy(() => import("../AdminComponents/AdminSidebar"));
const AdminContent = lazy(() => import("../AdminComponents/AdminContent"));

const AdminDashboard = () => {
    return (
        <Suspense fallback={null}>
            <div className="h-screen grid grid-cols-[16rem_1fr] grid-rows-[auto_1fr]">
                {/* Sidebar */}
                <div className="row-span-2 bg-white shadow-lg">
                    <AdminSidebar />
                </div>

                {/* Navbar */}
                <div className="bg-gray-800 shadow-lg">
                    <AdminNavbar />
                </div>

                {/* Content */}
                <div className="bg-gray-100 overflow-auto">
                    <AdminContent />
                </div>
            </div>
        </Suspense>
    );
};

export default AdminDashboard;
