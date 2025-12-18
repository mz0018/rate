import React, { lazy } from "react";

const BtnLogout = lazy(() => import("../../buttons/BtnLogout"));

const AdminNavbar = () => {
    return (
        <nav
            className="flex items-center justify-between p-4 text-white"
            style={{ backgroundColor: "var(--bg-color)" }}
        >
            <div className="flex items-center gap-3">
                <img src="/img/logo.png" className="h-12" alt="logo" />
                <div>
                    <h2 className="font-bold text-lg">Municipality of Solano</h2>
                    <span className="text-sm">Client's satisfaction and feedback form</span>
                </div>
            </div>

            <BtnLogout />
        </nav>
    );
};

export default AdminNavbar;
