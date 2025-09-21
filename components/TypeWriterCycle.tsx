import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface TypewriterCycleProps {
  sentences: string[];
}

const TypewriterCycle: React.FC<TypewriterCycleProps> = ({ sentences }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current || sentences.length === 0) return;

    const typeSpeed = 0.1;
    const deleteSpeed = 0.08;
    const betweenDelay = 0.8;
    const afterSentenceDelay = 0.5;

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    const setText = (value: string) => {
      if (textRef.current) textRef.current.textContent = value;
    };

    sentences.forEach((phrase) => {
      const length = phrase.length;

      tl.call(() => setText(""));

      for (let i = 0; i < length; i++) {
        tl.to({}, { duration: typeSpeed });
        tl.call(() => setText(phrase.substring(0, i + 1)));
      }

      tl.to({}, { duration: betweenDelay });

      for (let i = length - 1; i >= 0; i--) {
        tl.to({}, { duration: deleteSpeed });
        tl.call(() => setText(phrase.substring(0, i)));
      }

      tl.to({}, { duration: afterSentenceDelay });
    });

    return () => {
      tl.kill();
    };
  }, [sentences]);

  return (
    <div className="text-3xl text-blue-700 font-bold text-center mt-10">
      How <span ref={textRef}></span>
      <span className="blinking-cursor">|</span>
    </div>
  );
};

export default TypewriterCycle;
