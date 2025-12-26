import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const BtnGenerateQueueNum = () => {

    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    const handleClick = () => {
        try {
            setLoading(true);
            console.table(user.officeId);
        } catch (err) {
            console.error('Something went wrong: ', err);
            debugger
        } finally {
            setLoading(false);
        }
    }

    return (
        <button className="bg-green-500 text-white p-4 rounded-sm" disabled={loading} onClick={() => handleClick()}>
            {loading ? 'Loading...' : 'Generate Queue Number'}
        </button>
    )
}

export default BtnGenerateQueueNum;