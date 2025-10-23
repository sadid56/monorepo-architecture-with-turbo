import React from "react";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      style={{
        padding: "8px 16px",
        background: "#ff7f50",
        color: "white",
        borderRadius: "8px",
      }}
    >
      {children}
    </button>
  );
};
