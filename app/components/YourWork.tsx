import React from "react";

const YourWork = () => {
  return (
    <>
      <div className="w-[1921px] h-[574px] py-[140px] px-[220px] font-inter bg-[#043873] relative overflow-hidden">
        {/* Animated Background Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#043873] to-[#0f4c81] animate-[bg-slide_15s_infinite]"></div>

        <div className="w-[1481px] h-[294px] gap-[60px] flex justify-center relative z-10">
          <div className="w-[1064px] h-[171px] gap-[24px]">
            <div className="w-[1064px] h-[87px]">
              <h1 className="font-bold text-7xl leading-[87.14px] tracking-[-0.02em] text-white transition-transform duration-700 hover:scale-105 hover:text-[#FFE492]">
                Your work, everywhere you are
              </h1>
            </div>
            <div className="w-[1064px] h-[60px]">
              <p className="font-normal text-lg leading-[30px] tracking-[-0.02em] text-white transition-opacity duration-500 hover:opacity-80">
                Access your notes from your computer, phone or tablet by
                synchronising with various services, including whitepace,
                Dropbox and OneDrive. The app is available on Windows, macOS,
                Linux, Android and iOS. A terminal app is also available!
              </p>
            </div>

            <br />
            <div className="flex justify-center w-full h-[63px]">
              <button className="w-[195px] py-5 px-10 rounded-lg bg-[#4F9CF9] flex justify-center items-center gap-[10px] transition-transform duration-500 hover:scale-105 hover:shadow-lg hover:bg-[#3A7FDD]">
                <p className="font-medium text-lg leading-[23px] tracking-[0.02px] text-white">
                  Try Taskey →
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Custom CSS (include in your global CSS file)
// @keyframes bg-slide {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }

export default YourWork;
