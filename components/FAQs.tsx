import Link from "next/link";
import React from "react";

const FAQs = () => {
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
      <div className="md:w-2/3"></div>
    </section>
  );
};

export default FAQs;
