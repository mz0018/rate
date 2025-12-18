const AdminContent = ({ activeSection }) => {

    return (
        <main className="bg-gray-100 p-6 overflow-auto text-gray-900">
            <p>{activeSection}</p>
        </main>
    );
};

export default AdminContent;
