import React from 'react';
import Navbar from './public/Navbar';
import Footer from './public/Footer';

const Home = () => {
    return (
        <div className="h-screen flex flex-col bg-cover bg-center bg-no-repeat homeBg relative  dir-rtl">
            <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col flex-grow overflow-hidden mx-24 my-5">
                <div className="w-full">
                    <Navbar />
                </div>
            </div>
            <div className="w-full mt-auto z-20">
                <Footer />
            </div>
        </div>
    );
};

export default Home;