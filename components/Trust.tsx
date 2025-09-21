import React from "react";

const Trust = () => {
  return (
    <section>
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        TRUSTED BY OUR CUSTOMERS
      </h1>
      <p className="text-center text-gray-700">
        Medence Legal is backed by results, not just words
      </p>

      <div className="m-10 shadow-2xl flex flex-col md:flex-row justify-around items-center p-10">
        <div className="flex flex-col items-center m-4">
          <span className="text-6xl font-bold text-blue-600">27.45+</span>
          <span className="text-gray-700">crore worth of assets under</span>
          <span className="text-gray-700">litigation handled</span>
        </div>
        <div className="flex flex-col items-center m-4">
          <span className="text-6xl font-bold text-blue-600">73000</span>
          <span className="text-gray-700">Average Money Saved per User</span>
        </div>
        <div className="flex flex-col items-center m-4">
          <span className="text-6xl font-bold text-blue-600">4.83</span>
          <span className="text-gray-700">Average Rating</span>
        </div>
      </div>
    </section>
  );
};

export default Trust;
