import React, { Suspense, lazy } from "react";

const BtnGenerateQueueNum = lazy(() => import('../../buttons/BtnGenerateQueueNum'));

const QueueingSection = () => {

    return (
        <>
        Hello this is the queing section
        <BtnGenerateQueueNum />
        </>
    )
}

export default QueueingSection;