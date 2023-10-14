/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Logo } from "../Logo";

export const Navbar = ({ className }) => {
  return (
    <div className={`relative w-[1440px] h-[80px] bg-[#2196534c] overflow-hidden ${className}`}>
      <div className="absolute w-[338px] h-[201px] top-[-121px] left-[-116px] bg-primary rounded-[100.5px]">
        <Logo className="!left-[153px] !w-[92px] !top-[136px]" image="/img/image-1-3.png" property1="default" />
      </div>
      <div className="flex w-[462px] items-start gap-[36px] absolute top-[27px] left-[756px]">
        <div className="relative w-[54px] h-[27px] mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
          Home
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
          Product
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
          Add Product
        </div>
        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
          Jobs
        </div>
        <div className="relative w-fit mt-[-1.00px] mr-[-2.00px] [font-family:'Poppins',Helvetica] font-normal text-black text-[16px] tracking-[0] leading-[normal]">
          Scheme
        </div>
      </div>
      <img className="absolute w-[42px] h-[42px] top-[19px] left-[1341px]" alt="Vector" src="/img/vector-4.svg" />
      <img
        className="absolute w-[42px] h-[42px] top-[19px] left-[1261px] object-cover"
        alt="Image"
        src="/img/image-3-1.png"
      />
    </div>
  );
};
