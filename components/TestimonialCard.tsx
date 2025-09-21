import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  testimonial: string;
  avatarUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  testimonial,
  avatarUrl,
}) => {
  return (
    <article className="testimonial-card bg-white border border-gray-200 rounded-2xl p-6 shadow-sm w-[280px] h-[400px] flex flex-col transform transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden border flex-shrink-0">
          <Image
            src={avatarUrl}
            alt={`${name} avatar`}
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>

      <p
        className="text-gray-700 leading-relaxed text-sm overflow-auto flex-grow scrollbar 
      scrollbar-thin scrollbar-thumb-gray-300"
      >
        {testimonial}
      </p>

      <div className="mt-4 flex items-center gap-1 text-yellow-400">
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
        <span>★</span>
      </div>
    </article>
  );
};

export default TestimonialCard;
