import React from "react";
import { Component } from "../../components/Component";
import { Footer } from "../../components/Footer";
import { Frame } from "../../components/Frame";
import { FrameWrapper } from "../../components/FrameWrapper";
import { Navbar } from "../../components/Navbar";

export const CreateJob = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[87px] relative bg-[#e4e4e4]">
      <Navbar className="!self-stretch !w-full" />
      <div className="inline-flex flex-col items-center justify-center gap-[10px] p-[80px] relative flex-[0_0_auto] bg-white rounded-[27px] overflow-hidden">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[36px] tracking-[0] leading-[normal]">
          Create a Job listing
        </div>
        <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal]">
            Job Title*
          </div>
          <div className="relative w-[490px] h-[53px] rounded-[17px] border-[1.5px] border-solid border-[#bbbbbb]" />
        </div>
        <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal]">
            Description*
          </div>
          <div className="h-[114px] relative w-[490px] rounded-[17px] border-[1.5px] border-solid border-[#bbbbbb]" />
        </div>
        <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal]">
            Ministry*
          </div>
          <div className="relative w-[490px] h-[53px] rounded-[17px] border-[1.5px] border-solid border-[#bbbbbb]" />
        </div>
        <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal]">
            Duration of Job*
          </div>
          <div className="relative w-[490px] h-[53px] rounded-[17px] border-[1.5px] border-solid border-[#bbbbbb]" />
        </div>
        <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal]">
            Total Vacancies*
          </div>
          <div className="relative w-[490px] h-[53px] rounded-[17px] border-[1.5px] border-solid border-[#bbbbbb]" />
        </div>
        <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal]">
            Payment*
          </div>
          <div className="relative w-[490px] h-[53px] rounded-[17px] border-[1.5px] border-solid border-[#bbbbbb]" />
        </div>
        <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal]">
            Location*
          </div>
          <div className="h-[53px] overflow-hidden relative w-[490px] rounded-[17px] border-[1.5px] border-solid border-[#bbbbbb]">
            <Frame className="!left-[434px]" />
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-[14px] relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-light text-black text-[20px] tracking-[0] leading-[normal]">
            Deadline*
          </div>
          <div className="h-[53px] overflow-hidden relative w-[490px] rounded-[17px] border-[1.5px] border-solid border-[#bbbbbb]">
            <FrameWrapper className="!left-[434px]" />
          </div>
        </div>
        <div className="inline-flex items-center justify-center gap-[26px] pt-[25px] pb-0 px-0 relative flex-[0_0_auto]">
          <Component className="!flex-[0_0_auto]" property1="solid" text="Create" />
          <Component
            className="!flex !w-[134px]"
            divClassName="!mr-[-7.00px] !ml-[-7.00px]"
            property1="partial"
            text1="Cancel"
          />
        </div>
      </div>
      <Footer className="!self-stretch !w-full" line="/img/line-1-1.svg" />
    </div>
  );
};
