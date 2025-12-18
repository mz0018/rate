import { X } from "lucide-react";

const AdminSidebar = ({ open, onClose }) => {
    return (
        <>
            {/* Desktop sidebar */}
            <aside className="hidden sm:block row-span-2 bg-white shadow-lg p-4">
                <SidebarContent />
            </aside>

            {/* Mobile overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 sm:hidden"
                    onClick={onClose}
                />
            )}

            {/* Mobile drawer */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform sm:hidden ${
                    open ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={onClose}>
                        <X />
                    </button>
                </div>
                <SidebarContent />
            </aside>
        </>
    );
};

const SidebarContent = () => (
    <nav className="space-y-4">
        <a className="block font-semibold">Dashboard</a>
        <a className="block font-semibold">Settings</a>
        <a className="block font-semibold">Feedback</a>
    </nav>
);

export default AdminSidebar;
