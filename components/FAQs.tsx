"use client";

import { faqs } from "@/data";
import Link from "next/link";
import React, { useState } from "react";

const FAQs = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="py-8 px-4 md:py-12 md:px-12 flex flex-col md:flex-row gap-8">
      <div className="md:w-1/3 flex flex-col">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h2>
        <p className="mb-2 text-sm md:text-base">
          Still have any questions? Contact our Team via
        </p>
        <Link
          className="text-blue-600 underline"
          href="mailto:support@medencelegal.in"
        >
          support@medencelegal.in
        </Link>
        <Link href="/faqs">
          <button className="cursor-pointer rounded px-4 py-2 text-sm font-medium hover:bg-gray-200 transition w-full md:w-auto mt-6 border-gray-600">
            See All FAQ&apos;s
          </button>
        </Link>
      </div>
      <div className="md:w-2/3 space-y-4 border-[1px] border-gray-500 p-4 md:p-8 rounded-md">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-gray-500 rounded-lg overflow-hidden"
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center text-sm md:text-md font-semibold"
              onClick={() => toggleFAQ(faq.id)}
            >
              {faq.question}
              <span className="bg-blue-700 text-white rounded p-1">
                {openId === faq.id ? (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 15 15"
                    className="transition-transform "
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 15 15"
                    className="transition-transform rotate-45"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                )}
              </span>
            </button>
            {openId === faq.id && (
              <div className="flex flex-col gap-2">
                <div className="border-t w-full" />
                <p className="p-4 text-sm md:text-base">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
