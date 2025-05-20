import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserIcon from '../../assets/icons/UserIcon';
import { ProfileContext } from '../../contexts/UserContext';

//Styles
import './Navbar.css';

//Icons
import Logo from "../../assets/Logo.svg"
import Search from "../../assets/icons/Search.svg"
import Dark from "../../assets/icons/Dark.svg"
import HomeIcon from '../../assets/icons/HomeIcon';
import ShopIcon from '../../assets/icons/ShopIcon';
import ContactUsIcon from '../../assets/icons/ContactUsIcon';
import AboutIcon from '../../assets/icons/AboutIcon';
import BlogIcon from '../../assets/icons/BlogIcon';
import WarningIcon from '../../assets/icons/WarningIcon';

const Hamburger = ({ status, onChange }) => {
    document.body.style.overflow = status ? 'hidden' : '';

    return (
        <button className='lg:hidden'>
            <input type="checkbox" id="checkbox" checked={status} onChange={onChange} />
            <label htmlFor="checkbox" className="toggle">
                <div className="bars" id="bar1"></div>
                <div className="bars" id="bar2"></div>
                <div className="bars" id="bar3"></div>
            </label>
        </button>
    )
}

const Navbar = ({ logoVisiblity = true }) => {
    const { user, refreshUserData } = useContext(ProfileContext)
    const [menu, setMenu] = useState(false)
    const [showTooltip, setShowTooltip] = useState(false);

    useEffect(() => {
        const shouldShow = localStorage.getItem('showTooltipOnHome');
        let timeout;

        if (shouldShow === 'true') {
            setShowTooltip(true);
            timeout = setTimeout(() => {
                localStorage.removeItem('showTooltipOnHome');
                setShowTooltip(false)
            }, 5000);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, []);
    const toggleMenu = () => {
        setMenu((prevMenu) => !prevMenu);
    };

    const handleExitAccount = () => {
        localStorage.removeItem("currentUser")
        refreshUserData()
    }
    return (
        <>
            {
                <div className={`fixed font-bolder lg:hidden inset-0 z-50 bg-[#1C1C1C]/50 backdrop-blur-sm transition-opacity duration-300 ${menu ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className={`flex-col bg-dark-gray rounded-l-3xl p-8 pt-12 h-dvh w-72 transition-transform duration-300 transform ${menu ? 'translate-x-0' : 'translate-x-full'} relative overflow-y-auto scrollbar-none`}>
                        <div className="absolute top-5 left-6">
                            <Hamburger status={menu} onChange={toggleMenu} />
                        </div>
                        <div className='flex'>
                            <img className='w-5 mx-3 md:hidden' src={Search} alt='search' />
                            <img className='w-5 mx-3 md:hidden' src={Dark} alt='dark' />
                        </div>
                        <div className="h-full flex flex-col ">
                            <div className="my-12 flex justify-center">
                                <Link className="w-fit h-[45px] flex flex-col items-center justify-center" to="/">
                                    <img
                                        alt="website logo"
                                        fetchpriority="high"
                                        decoding="async"
                                        data-nimg="1"
                                        className=" m-auto transition-all w-28" src={Logo}
                                    />
                                </Link>
                            </div>
                            <ul className="flex flex-col gap-5 text-white">
                                <li>
                                    <Link className="font-medium transition-all w-full flex items-center gap-5" to="/">
                                        <HomeIcon className="fill-none stroke-white" />
                                        <p className="text-sm py-2">خانه</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="font-medium transition-all w-full flex items-center gap-5" to="/tariffs">
                                        <ShopIcon className="fill-white stroke-white" />
                                        <p className="text-sm py-2">فروشگاه</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="font-medium transition-all w-full flex items-center gap-5" to="/contact-us">
                                        <ContactUsIcon className="fill-white stroke-white" />
                                        <p className="text-sm py-2">تماس با ما</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="font-medium transition-all w-full flex items-center gap-5" to="/certificates">
                                        <AboutIcon className="fill-white stroke-white" />
                                        <p className="text-sm py-2">درباره ما</p>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="font-medium transition-all w-full flex items-center gap-5" to="/">
                                        <BlogIcon className="fill-none stroke-white" />
                                        <p className="text-sm py-2">وبلاگ</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }


            <nav className="max-w-screen-xl mb-10 justify-between flex dir-rtl w-full text-base">
                <Hamburger status={menu} className='lg:hidden' onChange={toggleMenu} />
                <div className="flex items-center max-lg:justify-center">
                    <img alt='icon' className={`md:w-14 h-9 w-full lg:ml-5 ${!logoVisiblity && 'hidden'}`} src={Logo} />
                    <div className="flex justify-between items-center max-lg:hidden text-stone-300 lg:w-96">
                        <Link to="/">خانه</Link>
                        <Link>فروشگاه</Link>
                        <Link>تماس با ما</Link>
                        <Link>درباره ما</Link>
                        <Link>وبلاگ</Link>
                    </div>
                </div>
                {/* <div className='w-full items-center justify-center flex'>
                    <img alt='icon' className='md:w-14 h-9 w-full  md:ml-5' src={Logo} />
                </div> */}
                <div className='flex'>
                    <img className='w-5 mx-3 max-md:hidden' src={Search} alt='search' />
                    <img className='w-5 mx-3 max-md:hidden' src={Dark} alt='dark' />
                    {
                        !user ?
                            <Link to='/signup'>
                                <button className="px-6 sm:px-9 py-2 max-sm:text-sm rounded-lg w-max bg-violet text-white">ثبت نام</button>
                            </Link>
                            :
                            <div onDoubleClick={handleExitAccount} className='relative flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/10'>
                                {(
                                    <div className={`${showTooltip ? 'opacity-100': 'opacity-0'} absolute z-20 left-full top-1 mx-2 mb-2 transition duration-200 transform translate-y-0`}>
                                        <div className="flex bg-slate-800 w-max max-w-xs text-white rounded-lg p-2 items-center dir-rtl">
                                            <WarningIcon />
                                            <p className="text-xs mx-2 mb-1">دوبار کلیک کنید تا از اکانت خارج شوید!</p>
                                        </div>
                                    </div>
                                )}

                                <UserIcon
                                    className='stroke-white fill-none'
                                    onMouseEnter={() => setShowTooltip(true)}
                                    onMouseLeave={() => setShowTooltip(false)}
                                />
                            </div>
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;