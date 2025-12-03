import { useState } from "react";
import axios from "axios";

const useFormSubmission = () => {
  const [selectedOffice, setSelectedOffice] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [otherServiceText, setOtherServiceText] = useState("");
  const [demographics, setDemographics] = useState({});
  const [addressDetails, setAddressDetails] = useState({});
  const [serviceRatings, setServiceRatings] = useState({});
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
        // console.log("Form submitted successfully:", response.data);
        console.log(serviceRatings)
    } catch (error) {
        console.error("Error submitting form:", error);
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
  };
};

export default useFormSubmission;
