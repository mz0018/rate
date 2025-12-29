import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import api from "../../services/api";
import { connectSocket, disconnectSocket } from "../../../src/socket";

const AdminQueueTable = () => {
    const { user } = useAuth();
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasErrors, setHasErrors] = useState(null);

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 15;

    const fetchQueue = async (pageNumber = 1) => {
        try {
            setIsLoading(true);
            const response = await api.get(
                `client/getqueue/${user._id}?page=${pageNumber}`
            );

            setList(response.data.data);
            setPage(response.data.page);
            setTotalPages(response.data.totalPages);

        } catch (err) {
            console.error("Something went wrong! ", err);
            setHasErrors(err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (user?._id) {
            fetchQueue(page);
        }
    }, [user]);

    useEffect(() => {
        const socket = connectSocket();

        socket.on("newQueue", (ticket) => {
            console.log("New queue ticket received:", ticket);

            setList(prev => [ticket, ...prev.slice(0, limit - 1)]);
        });

        return () => {
            disconnectSocket();
        };
    }, []);

    const handlePrev = () => {
        if (page > 1) {
            const newPage = page - 1;
            setPage(newPage);
            fetchQueue(newPage);
        }
    };

    const handleNext = () => {
        if (list.length === limit || page < totalPages) {
            const newPage = page + 1;
            setPage(newPage);
            fetchQueue(newPage);
        }
    };

    if (isLoading) return <p>Loading...</p>;
    if (hasErrors) return <p>Error loading queue.</p>;

    return (
        <div>
            {list.length === 0 ? (
                <p>No queues found.</p>
            ) : (
                <>
                <h2>HR Real time monitoring</h2>
                <table className="table-auto border-collapse border border-gray-300 mt-4">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Queue Number</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Expires At</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((q, index) => (
                            <tr key={q._id}>
                                <td className="border border-gray-300 px-4 py-2">{index + 1 + (page - 1) * limit}</td>
                                <td className="border border-gray-300 px-4 py-2">{q.queueNumber}</td>
                                <td className="border border-gray-300 px-4 py-2">{q.status}</td>
                                <td className="border border-gray-300 px-4 py-2">{new Date(q.expiresAt).toLocaleTimeString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </>
            )}

            <div className="flex gap-2 mt-4">
                <button
                    disabled={page === 1}
                    onClick={handlePrev}
                    className="px-3 py-1 border disabled:opacity-50"
                >
                    Prev
                </button>

                <span>Page {page} of {totalPages}</span>

                <button
                    disabled={list.length < limit || page === totalPages}
                    onClick={handleNext}
                    className="px-3 py-1 border disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default AdminQueueTable;
