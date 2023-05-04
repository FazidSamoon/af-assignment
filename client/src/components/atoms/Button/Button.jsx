import React from "react";

const Button = ({ text, onClick, fullWidth }) => {
  return (
    <div
      onClick={onClick ?? null}
      className={`${
        fullWidth ? "w-64" : "w-auto"
      } flex px-4 py-2 bg-secondary-color items-center justify-center text-white rounded-md `}
    >
      {text}
    </div>
  );
};

export default Button;
