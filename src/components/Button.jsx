import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick ? onClick : null} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
