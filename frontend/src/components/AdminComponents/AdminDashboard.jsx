import React, { lazy, Suspense, useState } from "react";

const AdminNavbar = lazy(() => import("../AdminComponents/AdminNavbar"));
const AdminSidebar = lazy(() => import("../AdminComponents/AdminSidebar"));
const AdminContent = lazy(() => import("../AdminComponents/AdminContent"));

const AdminDashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <Suspense fallback={null}>
            <div className="h-screen grid grid-cols-1 sm:grid-cols-[16rem_1fr] grid-rows-[auto_1fr]">
                
                {/* Sidebar */}
                <AdminSidebar
                    open={sidebarOpen}
                    onClose={() => setSidebarOpen(false)}
                />

                {/* Navbar */}
                <AdminNavbar onMenuClick={() => setSidebarOpen(true)} />

                {/* Content */}
                <AdminContent />
            </div>
        </Suspense>
    );
};

export default AdminDashboard;
