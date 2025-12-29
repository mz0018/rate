import React, { Suspense, lazy } from "react";
import { useAuth } from "../../context/AuthContext";

const BtnGenerateQueueNum = lazy(() => import('../../buttons/BtnGenerateQueueNum'));
const AdminQueueTable = lazy(() => import('../../components/AdminComponents/AdminQueueTable'));

const QueueingSection = () => {
    const { user } = useAuth();

    return (
        <>
            <Suspense fallback={null}>
                <BtnGenerateQueueNum />
            </Suspense>

            {user?.role === "hr-admin" && (
                <Suspense fallback={null}>
                    <AdminQueueTable />
                </Suspense>
            )}

            {user?.role === "office-admin" && (
                <Suspense fallback={null}>
                    <p>go to QUEUEING SECTION.JSX and start working on office-admin table!</p>
                </Suspense>
            )}
        </>
    );
};

export default QueueingSection;
