export const ratingOptions = [
  { icon: "😄", label: "Very Satisfactory", value: 5.0 },
  { icon: "🙂", label: "Satisfactory", value: 4.0 },
  { icon: "😐", label: "Neutral", value: 3.0 },
  { icon: "🙁", label: "Unsatisfactory", value: 2.0 },
  { icon: "😡", label: "Very Unsatisfactory", value: 1.0 }
];

export const serviceRatings = [
  { 
    id: 1,
    name: "Responsiveness (Pagkasagot)",
    description: "The service was willingly and promptly extended to the client/customer.",
    options: ratingOptions
  },
  { 
    id: 2,
    name: "Reliability (Pagiging Maaasahan)",
    description: "Performed the service within the expectation of the client/customer served.",
    options: ratingOptions
  },
  { 
    id: 3,
    name: "Access & Facilities",
    description: "Facilities/resources/modes of technology were readily available for convenient transactions.",
    options: ratingOptions
  },
  { 
    id: 4,
    name: "Communication (Komunikasyon)",
    description: "Materials associated with the service are easily understood and feedback mechanisms are present.",
    options: ratingOptions
  },
  { 
    id: 5,
    name: "Costs (Mga Gastos)",
    description: "Value for money spent on services rendered.",
    options: ratingOptions
  },
  { 
    id: 6,
    name: "Integrity (Integridad)",
    description: "Provided services with high morale and spirit of honesty.",
    options: ratingOptions
  },
  { 
    id: 7,
    name: "Assurance",
    description: "The service was provided by competent personnel.",
    options: ratingOptions
  },
  { 
    id: 8,
    name: "Outcome",
    description: "The overall expectations of the client are met.",
    options: ratingOptions
  }
];
