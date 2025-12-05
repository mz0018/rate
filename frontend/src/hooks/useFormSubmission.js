import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const useFormSubmission = () => {
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [otherServiceText, setOtherServiceText] = useState("");
  const [demographics, setDemographics] = useState({});
  const [addressDetails, setAddressDetails] = useState({});
  const [serviceRatings, setServiceRatings] = useState({});
  const [respondent, setRespondent] = useState({ clientName: "", clientPhone: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState({});

  const updateOffice = (office) => {
    setSelectedOffice(office);
  };

  const updateServices = (services, otherText = "") => {
    setSelectedServices(services);
    setOtherServiceText(otherText);
  };

  const updateDemographics = (demographicsData) => {
    setDemographics(demographicsData.selectedOptions || {});
    setAddressDetails(demographicsData.addressInputs || {});
  };

  const updateRespondent = (respondentData = {}) => {
    setRespondent((prev) => ({ ...prev, ...respondentData }));
  };

  const updateRatings = (ratings) => {
    setServiceRatings(ratings);
  };

  const getCompleteFormData = () => {
    return {
      selectedOffice,
      services: {
        selected: selectedServices.map((service) => ({
          id: service.id,
          name: service.name,
        })),
        otherText: otherServiceText,
      },
      demographics: {
        affiliations: demographics[1] || [],
        genders: demographics[2] || [],
        ageGroups: demographics[3] || [],
        addresses: {
          selected: demographics[4] || [],
          details: addressDetails,
        },
        employmentStatus: demographics[5] || [],
      },
      ratings: serviceRatings,
      respondent,
      submittedAt: new Date().toISOString(),
    };
  };

  const submitForm = async (ratingsFromComponent) => {
    const formData = {
      ...getCompleteFormData(),
      ratings: ratingsFromComponent
    };

    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/client/submit`, formData);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: `${response.data.message}`,
        });
    } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response?.data?.message || "An error occurred while submitting the form."}`,
          footer: '<a id="why-issue" href="#">Why do I have this issue?</a>'
        });

        setTimeout(() => {
          const link = document.getElementById("why-issue");
          if (link) {
            link.addEventListener("click", () => {
              Swal.fire({
                icon: "info",
                title: "Possible Causes",
                html: `
                  <ul style="text-align:left;">
                    <li>Server is down</li>
                    <li>API URL is incorrect</li>
                    <li>Missing or invalid data</li>
                    <li>Backend validation failed</li>
                  </ul>
                `
              });
            });
          }
        }, 50);
        debugger;
    } finally {
        setIsLoading(false);
    }
  };

  const resetForm = () => {
    setSelectedOffice(null);
    setSelectedServices([]);
    setOtherServiceText("");
    setDemographics({});
    setAddressDetails({});
    setServiceRatings({});
  };

  const getFormState = () => ({
    selectedOffice,
    selectedServices,
    otherServiceText,
    demographics,
    addressDetails,
    respondent,
    serviceRatings,
  });

  return {
    selectedOffice,
    selectedServices,
    otherServiceText,
    demographics,
    addressDetails,
    serviceRatings,
    updateOffice,
    updateServices,
    updateDemographics,
    updateRatings,
    submitForm,
    resetForm,
    getCompleteFormData,
    getFormState,
    respondent,
    updateRespondent,
  };
};

export default useFormSubmission;
