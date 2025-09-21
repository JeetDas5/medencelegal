"use client";

import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/testimonials.json";

// Use pure CSS marquee animation to create an infinite loop without JS complexity.
const Testimonials: React.FC = () => {
  const items = [...testimonials, ...testimonials];
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2">HEAR IT FROM OUR USERS</h2>
        <p className="text-gray-600 max-w-2xl mb-8">
          Discover the valuable feedback and testimonials from our satisfied clients about their experiences with us
        </p>

        <style>{`.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}`}</style>
        <div className="overflow-x-auto -mx-4 px-4 py-2 no-scrollbar" style={{ scrollBehavior: 'smooth' }}>
          <div className="flex gap-6 w-max snap-x snap-mandatory">
            {items.map((t, idx) => (
              <div key={idx} className="snap-start" style={{ minWidth: 280 }}>
                <TestimonialCard
                  name={t.name}
                  role={t.role}
                  testimonial={t.testimonial}
                  avatarUrl={t.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;