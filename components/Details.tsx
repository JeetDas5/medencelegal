"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Details: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !leftRef.current || !rightRef.current) return;

    gsap.set(leftRef.current, { x: -100, autoAlpha: 0 });
    gsap.set(rightRef.current, { x: 100, autoAlpha: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom 25%",
        scrub: 0.6,
      },
    });

    tl.fromTo(
      leftRef.current,
      { x: -120, autoAlpha: 0 },
      { x: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" },
      0
    )
      .fromTo(
        rightRef.current,
        { x: 120, autoAlpha: 0 },
        { x: 0, autoAlpha: 1, duration: 0.8, ease: "power2.out" },
        0
      )
      .fromTo(
        containerRef.current!.querySelectorAll(".mt-10, .details-image"),
        { y: 18, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.6, stagger: 0.08 },
        0.05
      );

    return () => {
      try {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch {
        // fallback: ignore
      }
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="mx-auto flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 p-5 overflow-hidden"
    >
      <div ref={leftRef} className="w-1/2 flex flex-col gap-3 p-4">
        <div className="flex flex-row rounded-4xl items-center relative">
          <Image
            src="/person_1.webp"
            alt="Person 1"
            width={50}
            height={50}
            className="rounded-full absolute top-0 left-0"
          />
          <Image
            src="/person_2.webp"
            alt="Person 2"
            width={50}
            height={50}
            className="rounded-full absolute top-0 left-8"
          />
          <Image
            src="/person_3.webp"
            alt="Person 3"
            width={50}
            height={50}
            className="rounded-full absolute top-0 left-16"
          />
        </div>
        <div className="mt-10 space-y-2">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
            Welcome to Medence Legal.
          </h1>
          <span className="text-gray-600 tracking-wide leading-2">
            Just like insurance, you pay a simple fee upfront — and when trouble
            comes, we handle the legal fight for you. No chasing lawyers. <br />
            No high legal bills. Just peace of mind for tenants, consumers, and
            everyday legal needs.
            <br />
            It&apos;s like having a personal lawyer in your corner to tackle the
            world for you.
          </span>
        </div>
      </div>
      <div ref={rightRef} className="w-1/2 flex justify-end items-center px-6">
        <Image
          src="/legal.webp"
          alt="Legal Illustration"
          width={400}
          height={400}
          className="rounded-4xl max-h-[80vh]"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Details;
