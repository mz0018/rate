import React, { Suspense, lazy } from "react";

const BtnGenerateQueueNum = lazy(() => import('../../buttons/BtnGenerateQueueNum'));

const QueueingSection = () => {

    return (
        <>
        <BtnGenerateQueueNum />
        </>
    )
}

export default QueueingSection;