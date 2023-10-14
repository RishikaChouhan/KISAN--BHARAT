/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Logo } from "../Logo";

export const Footer = ({ className, line = "/img/line-1.svg" }) => {
  return (
    <div className={`relative w-[1440px] h-[277px] bg-[#2196534c] ${className}`}>
      <Logo className="!absolute !left-[69px] !top-[70px]" property1="variant-2" />
      <div className="inline-flex flex-col items-start gap-[15px] absolute top-[56px] left-[608px]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          Product
        </div>
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          Jobs
        </div>
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          Loan
        </div>
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          Scheme
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-[15px] absolute top-[62px] left-[430px]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          Home
        </div>
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          About
        </div>
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-normal text-black text-[20px] tracking-[0] leading-[normal]">
          Contact us
        </div>
      </div>
      <img className="absolute w-[3px] h-[207px] top-[34px] left-[360px]" alt="Line" src={line} />
      <img className="absolute w-[3px] h-[207px] top-[34px] left-[780px]" alt="Line" src="/img/line-3-1.svg" />
      <div className="absolute w-[316px] h-[207px] top-[36px] left-[1098px]">
        <img className="absolute w-[3px] h-[207px] top-0 left-[6px]" alt="Line" src="/img/line-3-1.svg" />
        <img
          className="absolute w-[140px] h-[140px] top-[34px] left-0 object-cover"
          alt="Moi removebg preview"
          src="/img/moi-removebg-preview-1-1.png"
        />
        <p className="absolute top-[58px] left-[135px] [font-family:'Poppins',Helvetica] font-medium text-black text-[20px] tracking-[0] leading-[normal]">
          Ministry of Skill <br />
          Development and
          <br />
          Entrepreneurship
        </p>
      </div>
      <div className="absolute w-[243px] h-[157px] top-[56px] left-[826px]">
        <p className="absolute -top-px left-0 [font-family:'Poppins',Helvetica] font-normal text-black text-[26px] tracking-[0] leading-[normal]">
          Give us a follow on
          <br />
          our social media
        </p>
        <img className="absolute w-[44px] h-[43px] top-[111px] left-0" alt="Vector" src="/img/vector-7.svg" />
        <img className="absolute w-[44px] h-[43px] top-[110px] left-[98px]" alt="Vector" src="/img/vector-6.svg" />
        <img className="absolute w-[46px] h-[44px] top-[113px] left-[196px]" alt="Vector" src="/img/vector-5.svg" />
      </div>
    </div>
  );
};

Footer.propTypes = {
  line: PropTypes.string,
};
