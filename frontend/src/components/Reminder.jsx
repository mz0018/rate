import React from "react";

const Reminder = ({ onDismiss }) => {
  return (
    <div
      className="p-6 sm:p-8 rounded-xl shadow-xl w-full sm:w-[350px] md:w-[450px] lg:w-[500px] transition-all duration-300 bg-[var(--bg-color)] text-[var(--text-color)]"
    >
      <div className="prose prose-sm sm:prose-base lg:prose-lg text-justify space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">Reminder</h2>

        <p>Dear Valued Client,</p>

        <p>
          Thank you for choosing the Local Government Unit (LGU) of Solano for your service needs. 
          This <a className="font-semibold">Client Satisfaction Measurement (CSM)</a> tracks the customer experience of government offices. 
          Your feedback on your <a className="font-semibold">recently concluded transaction</a> will help this office provide a better service. 
          Rest assured, all information provided in this survey will be treated with the utmost confidentiality 
          in accordance with the Data Privacy Act of 2012.
        </p>

        <p>
          Your participation is voluntary, and your responses will only be used for the purpose of service improvement. 
          We assure you that your privacy is a priority for us.
        </p>

        <p>
          Thank you for helping us create a more responsive and client-oriented LGU Solano.
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onDismiss}
            className="w-1/2 inline-flex items-center text-center gap-2 px-4 py-2 rounded-lg font-semibold transition duration-200 shadow-sm text-[var(--bg-color)] bg-[var(--text-color)] hover:brightness-90"
          > 
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reminder;
