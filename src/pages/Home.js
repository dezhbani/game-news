import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../components/modules/Slider';

import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.png'
import slider3 from '../assets/slider3.png'
import slider4 from '../assets/slider4.png'
import slider5 from '../assets/slider5.png'
import slider6 from '../assets/slider6.png'

const Home = () => {
    const sliderData = [
        slider2, 
        slider3,
        slider1,
        slider4,
        slider5,
        slider6,
        slider4,
    ]
    return (
        <div className="h-full font-iranYekan flex flex-col bg-cover bg-center bg-no-repeat homeBg relative  dir-rtl">
            <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col flex-grow mx-24 my-5">
                <div className="w-full">
                    <Navbar />
                    <Slider data={sliderData} />
                </div>
            </div>
            <div className="w-full mt-auto z-20">
                <Footer />
            </div>
        </div>
    );
};

export default Home;