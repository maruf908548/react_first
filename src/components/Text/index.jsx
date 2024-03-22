import React from "react";

const sizes = {
  xs: "text-[13px] font-normal",
  lg: "text-base font-normal",
  s: "text-sm font-medium",
  xl: "text-[64px] font-medium md:text-5xl",
  md: "text-[15px] font-medium",
};

const Text = ({ children, className = "", as, size = "xs", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-gray-600 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
