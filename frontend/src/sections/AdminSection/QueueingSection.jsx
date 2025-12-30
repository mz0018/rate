import React, { Suspense, lazy } from "react";

const BtnGenerateQueueNum = lazy(() => import('../../buttons/BtnGenerateQueueNum'));
const AdminQueueTable = lazy(() => import('../../components/AdminComponents/AdminQueueTable'));

const QueueingSection = () => {

    return (
        <>
            <Suspense fallback={null}>
                <BtnGenerateQueueNum />
            </Suspense>

            <Suspense fallback={null}>
                <AdminQueueTable />
            </Suspense>

        </>
    );
};

export default QueueingSection;
