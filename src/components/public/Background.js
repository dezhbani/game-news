import React from 'react';

const Background = ({children}) => {
    return (
        <div className="min-h-screen h-full flex flex-col bg-cover z-0 bg-center bg-no-repeat homeBg relative dir-rtl">
            <div className="absolute z-10 inset-0 bg-dark-gray backdrop-blur-[114px] opacity-80"></div>
            <div className="relative z-20 flex flex-col w-full flex-grow max-w-screen px-6 md:px-24 py-5 justify-center items-center">
                {children}
            </div>
        </div>
    );
};

export default Background;