"use client"

import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WCU: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const middleRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use gsap.context to scope animations and ScrollTrigger to this component
    const ctx = gsap.context(() => {
      const left = leftRef.current!;
      const middle = middleRef.current!;
      const right = rightRef.current!;

      // set initial states scoped to this context
      gsap.set(middle, { xPercent: -100 });
      gsap.set([left, right], { autoAlpha: 0, xPercent: 0, scale: 0.98 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(middle, { duration: 0.6, xPercent: 0, ease: "power3.out" }).to(
        [left, right],
        {
          duration: 1.5,
          autoAlpha: 1,
          xPercent: 0,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=.15"
      );
    }, container);

    return () => {
      // revert the context which will kill timelines and ScrollTriggers created inside it
      ctx.revert();
    };
  }, []);

  return (
    <section>
      <div
        ref={containerRef}
        className="w-[90vw] mx-auto my-10 bg-[#111828] text-white/90 p-5 rounded-3xl"
      >
        <h1 className="text-4xl mb-3 font-bold col-span-1 md:col-span-5 text-center">
          Why choose us?
        </h1>
        <div className="py-8 px-5 mx-auto text-center rounded-2xl text-black flex flex-row gap-2 items-center justify-center">
          <div
            ref={leftRef}
            className="h-[380px] flex flex-col gap-4 w-full sm:w-96 p-8 px-4 bg-[#90cce1] rounded-2xl"
          >
            <h3 className="text-xl sm:text-3xl font-medium">
              Affordable Legal Solutions.
            </h3>
            <p className="text-sm sm:text-base">
              Access premium legal services without stretching your budget.
            </p>
            <hr className="border-t border-gray-500" />
            <ul className="list-disc list-inside text-xs sm:text-sm">
              <li>Flexible plans to suit various financial needs.</li>
              <li>Transparent pricing with no hidden charges.</li>
              <li>Quality legal support at an unbeatable value.</li>
            </ul>
          </div>

          <div
            ref={middleRef}
            className="h-[380px] flex flex-col gap-4 w-full sm:w-96 p-8  px-4 bg-[#90cce1] rounded-2xl"
          >
            <h3 className="text-xl sm:text-3xl font-medium">
              Expert and Personalized Support.
            </h3>
            <p className="text-sm sm:text-base">
              Unmatched service from seasoned legal professionals tailored to
              your needs.
            </p>
            <hr className="border-t border-gray-500" />
            <ul className="list-disc list-inside text-xs sm:text-sm">
              <li>Diverse but expert lawyers.</li>
              <li>Best lawyer-client fit combination.</li>
              <li>Comprehensive solutions as per requirements.</li>
            </ul>
          </div>

          <div
            ref={rightRef}
            className="h-[380px] flex flex-col gap-4 w-full sm:w-96 p-8 px-4 bg-white rounded-2xl"
          >
            <h3 className="text-xl sm:text-3xl font-medium">
              Affordable Legal Solutions.
            </h3>
            <p className="text-sm sm:text-base">
              Access premium legal services without stretching your budget.
            </p>
            <hr className="border-t border-gray-500" />
            <ul className="list-disc list-inside text-xs sm:text-sm">
              <li>Flexible plans to suit various financial needs.</li>
              <li>Transparent pricing with no hidden charges.</li>
              <li>Quality legal support at an unbeatable value.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WCU;
