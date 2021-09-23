import React from "react";

export const Button = ({ size, variant, ...args }) => {
  return (
    <button
      style={{
        fontSize: size === "large" ? 20 : 16,
        backgroundColor: variant === "primary" ? "blue" : "white",
      }}
    >
      {...args}
    </button>
  );
};
