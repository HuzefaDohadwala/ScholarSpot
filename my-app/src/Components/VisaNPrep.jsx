import React from 'react';

const VisaNPrep = () => {
  const visaPrepInfo = [
    {
      title: "Documentation",
      description: "Gather all required documents like academic transcripts, proof of funds, letter of acceptance from the educational institution, and passport photos.",
      link: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/forms.html"
    },
    {
      title: "Attend a Medical Examination",
      description: "Some countries require a medical examination. Find an approved doctor for this process and ensure you have the necessary documents.",
      link: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/medical-examination.html"
    },
    {
      title: "Visa Interview Tips",
      description: "Dress professionally, arrive early, answer all questions honestly, and provide complete and correct documentation.",
      link: "https://www.usavisa.com/visa-interview-tips"
    },
    {
      title: "Proof of Funds",
      description: "You may need to provide evidence that you have enough money to pay for tuition fees, living expenses, and return transportation.",
      link: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/get-documents.html#doc3"
    },
    {
      title: "Language Proficiency",
      description: "Some countries may require proof of proficiency in their primary language or the medium of instruction in your course.",
      link: "https://www.ielts.org/"
    },
    {
      title: "Travel Insurance",
      description: "Consider obtaining a travel insurance policy that covers medical emergencies, trip cancellations, and loss of personal belongings.",
      link: "https://www.worldnomads.com/"
    },
    {
      title: "Local Etiquette and Customs",
      description: "Research the customs, traditions, and etiquettes of your destination country to avoid any cultural misunderstandings.",
      link: "https://www.commisceo-global.com/resources/country-guides"
    },
    {
      title: "Accommodation Arrangements",
      description: "Before your departure, ensure you have a place to stay. Look into student hostels, shared apartments, or home stays as options.",
      link: "https://www.booking.com/"
    }
  ];

  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-semibold mb-4">Visa and Preparation Tips</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visaPrepInfo.map((item, index) => (
            <a href={item.link} key={index} className="border rounded p-4 hover:shadow-lg transition-shadow duration-300 block text-decoration-none">
              <h2 className="text-xl font-medium mb-2">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default VisaNPrep;
