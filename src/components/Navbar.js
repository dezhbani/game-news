import React from 'react';

import Logo from "../assets/Logo.svg"
import Search from "../assets/icons/Search.svg"
import Dark from "../assets/icons/Dark.svg"

const Navbar = () => {
    return (
        <nav className="dir-rtl w-full text-base">
            <div className="flex float-right">
                <div className="flex justify-between items-center text-stone-300 w-[500px]">
                    <img alt='icon' className='w-14 h-9' src={Logo} />
                    <span>خانه</span>
                    <span>فروشگاه</span>
                    <span>تماس با ما</span>
                    <span>درباره ما</span>
                    <span>وبلاگ</span>
                </div>
            </div>
            <div className='flex float-left'>
                <img className='w-5 mx-3' src={Search} alt='search' />
                <img className='w-5 mx-3' src={Dark} alt='dark' />
                <button className="px-9 py-2 rounded-lg bg-violet text-white">ثبت نام</button>
            </div>
        </nav>
    );
};

export default Navbar;