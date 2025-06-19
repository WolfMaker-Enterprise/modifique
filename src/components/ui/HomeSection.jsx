import React from "react";

export const HomeSection = ({ children }) => {
  return (
    <section className="h-screen mb-4 w-full grid">
      <div className="mx-auto w-full container p-4">{children}</div>
    </section>
  );
};
