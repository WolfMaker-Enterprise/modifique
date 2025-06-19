import React from "react";

export default function TextGradient({ word }) {
  return (
    <span className="bg-gradient-to-r to-[#8B001D] from-[#C40129] bg-clip-text text-transparent">
      {word}
    </span>
  );
}
