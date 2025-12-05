import React, { useState, lazy } from "react";
const BtnGoBack = lazy(() => import("../buttons/BtnGoBack"));
const BtnNext = lazy(() => import("../buttons/BtnNext"));

const RespondentProfile = ({ onBack, onNext }) => {
    const [clientName, setClientName] = useState("");
    const [clientPhone, setClientPhone] = useState("");

    const handleBack = () => {
        if (typeof onBack === "function") onBack();
    };

    const handleNext = () => {
        const respondent = {
            clientName: clientName.trim(),
            clientPhone: clientPhone.trim(),
        };
        if (typeof onNext === "function") onNext(respondent);
    };

    const isNextDisabled = false;

    return (
        <div
        className="p-4 sm:p-6 rounded-lg shadow-lg w-full sm:w-[350px] md:w-[450px] lg:w-[500px] transition-colors duration-300 flex flex-col gap-4"
        style={{
            backgroundColor: "var(--bg-color)",
            color: "var(--text-color)",
        }}
        >

            <div className="mb-2 border-b border-[var(--border-color)] pb-5">
                <h2 className="text-base sm:text-lg font-semibold" style={{ color: "var(--heading-color)" }}>Respondent's Profile</h2>
                <p className="text-xs sm:text-sm opacity-75">
                    You may leave it blank if you prefer not to include it.
                </p>
            </div>

                        <div className="space-y-3">
                            <label className="text-sm sm:text-base">Client's Name <span className="text-xs opacity-70">(Optional)</span></label>
                            <input
                                type="text"
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                placeholder="e.g John Doe"
                                className="w-full px-2 sm:px-3 py-1 sm:py-2 rounded border text-sm sm:text-base transition-colors duration-300"
                                style={{
                                    backgroundColor: "var(--bg-color)",
                                    borderColor: "rgba(128,128,128,0.3)",
                                    color: "var(--text-color)",
                                }}
                            />

                            <label className="text-sm sm:text-base">Tel. No./ CP No. <span className="text-xs opacity-70">(Optional)</span></label>
                            <input
                                type="tel"
                                value={clientPhone}
                                onChange={(e) => setClientPhone(e.target.value)}
                                placeholder="Phone number (optional, e.g. 07123 456789)"
                                className="w-full px-2 sm:px-3 py-1 sm:py-2 rounded border text-sm sm:text-base transition-colors duration-300"
                                style={{
                                    backgroundColor: "var(--bg-color)",
                                    borderColor: "rgba(128,128,128,0.3)",
                                    color: "var(--text-color)",
                                }}
                            />
                        </div>

            <div className="flex gap-2 sm:gap-3 justify-between mt-3 sm:mt-4">
                <BtnGoBack onClick={handleBack} />
                <BtnNext onClick={handleNext} disabled={isNextDisabled} />
            </div>

        </div>
    )
}

export default RespondentProfile;