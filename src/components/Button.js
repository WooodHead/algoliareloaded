import React from "react";
 export default ({
  children,
  onClick,
  type = "button",
  className = "button-inline",
    }) => (
  <button type={type} onClick={onClick} className={className}>
    {children}
  </button>
);