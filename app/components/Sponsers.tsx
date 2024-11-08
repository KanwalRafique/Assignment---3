import Image from "next/image";
import Apple from "@/app/assets/Apple.png";
import Micro from "@/app/assets/microsoft 1.png";
import Slack from "@/app/assets/Slack_Technologies_Logo 1.png";
import Google from "@/app/assets/Google.png";

import React from "react";

export const Sponsers = () => {
  return (
    <>
      <div className="w-[1922px] h-[538px] py-[140px] px-[220px] gap-[100px]">
        <div className="w-[1482px] h-[87px] text-[#212529]">
          <h2 className="font-bold text-[7xl] leading-[87.14px] tracking-[-0.02em] text-center text-[#212529] text-7xl transition-transform duration-500 hover:scale-110 hover:text-[#4F9CF9]">
            Our Sponsors
          </h2>
        </div>
        <div className="w-[1482px] h-[71px] flex justify-between items-center">
          <div className="w-[110px] h-[65px] pt-2 gap-1 hover:scale-110 transition-transform duration-500 ease-in-out">
            <Image src={Apple} alt="Apple Logo" className="hover:opacity-80 transition-opacity duration-300" />
          </div>
          <div className="w-[287px] h-[62px] hover:scale-110 transition-transform duration-500 ease-in-out">
            <Image src={Micro} alt="Microsoft Logo" className="hover:opacity-80 transition-opacity duration-300" />
          </div>
          <div className="w-[280px] h-[71px] hover:scale-110 transition-transform duration-500 ease-in-out">
            <Image src={Slack} alt="Slack Logo" className="hover:opacity-80 transition-opacity duration-300" />
          </div>
          <div className="w-[220px] h-[69.81px] pt-11 gap-4px hover:scale-110 transition-transform duration-500 ease-in-out">
            <Image src={Google} alt="Google Logo" className="hover:opacity-80 transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </>
  );
};
