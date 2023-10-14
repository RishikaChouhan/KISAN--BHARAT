/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Logo = ({ property1, className, image = "/img/image-1-5.png" }) => {
  return (
    <div
      className={`${property1 === "variant-2" ? "w-[202px]" : "w-[93px]"} ${
        property1 === "variant-2" ? "h-[138px]" : "h-[51px]"
      } ${property1 === "default" ? "relative" : ""} ${className}`}
    >
      {property1 === "default" && (
        <>
          <div className="absolute top-[6px] left-[53px] [font-family:'Karantina',Helvetica] font-normal text-black text-[22px] tracking-[0] leading-[normal]">
            Kisan
            <br />
            Bharat
          </div>
          <img className="absolute w-[48px] h-[51px] top-0 left-0" alt="Image" src={image} />
        </>
      )}

      {property1 === "variant-2" && (
        <div className="relative w-[174px] h-[122px]">
          <div className="absolute top-[17px] left-[91px] [font-family:'Karantina',Helvetica] font-normal text-black text-[50px] tracking-[0] leading-[normal]">
            Kisan
            <br />
            Bharat
          </div>
          <img className="absolute w-[101px] h-[122px] top-0 left-0" alt="Image" src="/img/image-1-4.png" />
        </div>
      )}
    </div>
  );
};

Logo.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  image: PropTypes.string,
};
