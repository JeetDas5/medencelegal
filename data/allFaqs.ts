export type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export type FAQTopic = {
  topic: string;
  faqs: FAQ[];
};

export const allFaqs: FAQTopic[] = [
  {
    topic: "General",
    faqs: [
      {
        id: 1,
        question: "What is Personal lawyer service by Medence?",
        answer:
          "Medence's Personal Lawyer service offers you access to a dedicated lawyer for legal advice and support. This lawyer will assist with a wide range of legal concerns, guiding you through legal processes and offering solutions based on your needs.",
      },
      {
        id: 2,
        question:
          "Can I avail the lawyer service after the trouble arises and not before?",
        answer:
          "While we specialise in providing before-the-event legal services to increase affordability, you can also avail the lawyer service after the event too. But in such cases the fees for litigation is higher and vary based on lawyers' charges.",
      },
    ],
  },
  {
    topic: "Plan",
    faqs: [
      {
        id: 3,
        question: "What are included and excluded in the plan?",
        answer:
          "The plan includes access to legal advice, consultations, drafting, and representing the case in court that are within the scope of your chosen plan.",
      },
      {
        id: 4,
        question: "What are included and excluded in the plan?",
        answer:
          "The plan includes access to legal advice, consultations, drafting, and representing the case in court that are within the scope of your chosen plan.",
      },
      {
        id: 5,
        question: "What are included and excluded in the plan?",
        answer:
          "The plan includes access to legal advice, consultations, drafting, and representing the case in court that are within the scope of your chosen plan.",
      },
      {
        id: 6,
        question: "What are included and excluded in the plan?",
        answer:
          "The plan includes access to legal advice, consultations, drafting, and representing the case in court that are within the scope of your chosen plan.",
      },
    ],
  },
  {
    topic: "Lawyer",
    faqs: [
      {
        id: 7,
        question: "How experienced are the lawyers?",
        answer:
          "Our lawyers are highly experienced professionals with a proven track record in various legal fields. They are well-versed in handling a wide range of legal issues and are committed to providing top-notch legal services to our clients.",
      },
      {
        id: 8,
        question: "Can I choose my own lawyer?",
        answer:
          "Yes, you can choose your own lawyer from our panel of experienced legal professionals. We also offer the option to match you with a lawyer based on your specific legal needs and preferences.",
      },
    ],
  },
  {
    topic: "Billing",
    faqs: [
      {
        id: 9,
        question: "How does the billing work?",
        answer:
          "Billing is done on a monthly or annual basis, depending on your chosen plan. You will receive an invoice detailing the charges and payment methods available.",
      },
    ],
  },
  {
    topic: "Others",
    faqs: [
      {
        id: 10,
        question: "How do I get started with the service?",
        answer:
          "To get started, simply sign up on our website and choose the plan that best suits your needs. Once registered, you can schedule a consultation with your dedicated lawyer to discuss your legal concerns.",
      },
      {
        id: 11,
        question: "What if I need legal assistance outside of my plan?",
        answer:
          "If you require legal assistance outside the scope of your plan, additional fees may apply. Your dedicated lawyer will inform you of any extra costs before proceeding with any services.",
      },
    ],
  },
];
