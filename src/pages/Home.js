import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from '../modules/Slider';

// Images
import slider1 from '../assets/slider/slide1.jpg'
import slider2 from '../assets/slider/slide2.png'
import slider3 from '../assets/slider/slide3.png'
import slider4 from '../assets/slider/slide4.png'
import slider6 from '../assets/slider/slide6.png'

// Icons
import Products from '../components/Products';
import Articles from '../components/Articles';

const Home = () => {
    const sliderData = [
        slider2, 
        slider3,
        slider1,
        slider4,
        slider6,
        slider4,
    ]
    return (
        <div className="h-full font-iranYekan flex flex-col bg-cover bg-center bg-no-repeat homeBg relative  dir-rtl">
            <div className="absolute z-10 inset-0 bg-black bg-opacity-50 backdrop-blur-[114px] opacity-80"></div>
            <div className="relative z-10 flex flex-col flex-grow mx-24 my-5">
                <div className="w-full">
                    <Navbar />
                    <Slider data={sliderData} />
                    <Products />
                    <Articles />
                </div>
            </div>
            <div className="w-full mt-auto z-20">
                <Footer />
            </div>
        </div>
    );
};

export default Home;