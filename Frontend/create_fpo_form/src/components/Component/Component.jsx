/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Component = ({ property1, className, text = "Apply", divClassName, text1 = "Join" }) => {
  return (
    <div
      className={`inline-flex items-center gap-[10px] overflow-hidden rounded-[8px] justify-center relative ${
        property1 === "partial" ? "border border-solid" : ""
      } ${property1 === "partial" ? "border-primary" : ""} ${
        property1 === "partial" ? "px-[45px] py-[9px]" : "px-[39px] py-[9px]"
      } ${property1 === "solid" ? "bg-primary" : ""} ${className}`}
    >
      <div
        className={`[font-family:'Poppins',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-[16px] font-semibold leading-[normal] relative ${
          property1 === "partial" ? "text-primary" : "text-white"
        } ${divClassName}`}
      >
        {property1 === "solid" && <>{text}</>}

        {property1 === "partial" && <>{text1}</>}
      </div>
    </div>
  );
};

Component.propTypes = {
  property1: PropTypes.oneOf(["partial", "solid"]),
  text: PropTypes.string,
  text1: PropTypes.string,
};
