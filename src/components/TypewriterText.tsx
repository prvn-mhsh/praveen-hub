"use client";
import React, { useEffect, useState } from "react";

interface TypewriterTextProps {
  words: string[];
  typingSpeed?: number;   // ms per character
  deletingSpeed?: number; // ms per character when deleting
  delayBetween?: number;  // pause before deleting
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  words,
  typingSpeed = 120,
  deletingSpeed = 60,
  delayBetween = 1500,
  className = "",
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (index >= words.length) {
      setIndex(0);
      return;
    }

    if (!deleting && subIndex === words[index].length) {
      const timeout = setTimeout(() => setDeleting(true), delayBetween);
      return () => clearTimeout(timeout);
    }

    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
    }, deleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      {words[index].substring(0, subIndex)}
      {/* Blinking cursor */}
      <span className="ml-1 w-[2px] h-6 bg-primary animate-blink" />
    </span>
  );
};

export default TypewriterText;
