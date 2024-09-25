import React from "react";

const Button = ({ onClick, className, children,aos }) => {
  return (
    <button onClick={onClick ? onClick : null} className={`${className}`} data-aos={aos? aos : null}>
      {children}
    </button>
  );
};

export default Button;
