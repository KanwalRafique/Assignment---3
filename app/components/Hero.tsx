import React from 'react';
import Image from '@/app/assets/Btn-free-trial.png';

export const Hero = () => {
  return (
    <>
      <div className='w-[1920px] h-[829px] py-[140px] px-[220px] top-[92px] bg-[#043873] text-white flex items-center'>
        <div className='w-[656px] h-[361px]'>
          <div className='w-[600px] h-[238px]'>
            <h2 className='font-bold text-[64px] leading-[77.45px] tracking-[-0.02em] mb-6 hover:text-[#FFE492] transition duration-500 hover:scale-105'>
              Get More Done with whitespace
            </h2>
            <p className='font-normal text-lg leading-[30px] tracking-[-0.02em] hover:text-[#B0D4FF] transition duration-500 hover:translate-x-1'>
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks.
            </p>
          </div>
          <div className='w-[219px] h-[63px] rounded-lg p-5 gap-[10px] bg-[#4F9CF9] mt-12 flex justify-between items-center hover:bg-[#3a7fdd] hover:scale-105 transition-all duration-500 hover:shadow-lg'>
            <button className='hover:text-white transition duration-500'>
              Try Whitespace Free
            </button>
          </div>
        </div>
        <div className='w-[824px] h-[549px] bg-[#C4DEFD] hover:scale-110 hover:shadow-2xl transition-transform duration-500'></div>
      </div>
    </>
  );
};
