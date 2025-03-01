import React from 'react';

//icons
import Twitter from '../assets/icons/Twitter.svg'
import Instagram from '../assets/icons/Instagram.svg'
import Whatsapp from '../assets/icons/Whatsapp.svg'
import Linkedin from '../assets/icons/Linkedin.svg'
import { Link } from 'react-router-dom';

import image1 from '../assets/metal_gear_solid.jpg'
import image2 from '../assets/marathon-announce-press-kit-large-02-1684967832285 1.jpg'
import image3 from '../assets/img.jpg'
import Enamd from '../assets/logo 1.png'
import Kasbokar from '../assets/kasbokar 1.png'
import Samandehi from '../assets/rezi 1.png'
import ArrowLeft from '../assets/icons/ArrowLeft.svg'
import Message from '../assets/icons/Message.svg'

const Footer = () => {
    return (
        <div className='w-full text-white font-normal'>
            <div className='bg-[#33353b] px-24'>
                <div className='flex justify-between w-full'>
                    <div className='ml-10 my-16 max-w-72'>
                        <h6 className='text-xl font-bold'>داغترین مطالب هفته</h6>
                        <ul className="flex flex-col mt-14 gap-4 text-base">
                            <li className="flex">
                                <Link className="flex" to='#'>
                                    <img className='w-24 rounded-xl' src={image1} alt='' />
                                    <p className='mr-2 font-light'>این هفته چه بازی های معرفی می شوند.</p>
                                </Link>
                            </li>
                            <li className="flex">
                                <Link className="flex" to='#'>
                                    <img className='w-24 rounded-xl' src={image2} alt='' />
                                    <p className='mr-2 font-light'>جدیدترین تریلر بازی های جدید</p>
                                </Link>
                            </li>
                            <li className="flex">
                                <Link className="flex" to='#'>
                                    <img className='w-24 rounded-xl' src={image3} alt='' />
                                    <p className='mr-2 font-light'>این هفته چه بازی های معرفی می شوند.</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='mx-10 my-16'>
                        <h6 className='text-xl font-bold'>پربازدیدترین صفحات</h6>
                        <ul className="flex flex-col mt-14 gap-6 text-base">
                            <li className="">
                                <Link to='#'>جدیدترین بازی ها</Link>
                            </li>
                            <li>
                                <Link to='#'>مقالات</Link>
                            </li>
                            <li>
                                <Link to='#'>فروشگاه</Link>
                            </li>
                            <li>
                                <Link to='#'>درباره ما</Link>
                            </li>
                            <li>
                                <Link to='#'>تماس با ما</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='mr-10 my-16'>
                        <h6 className='text-xl font-bold'>عضویت در خبرنامه</h6>
                        <div className='flex flex-col mt-14 gap-4 text-base'>
                            <div className='flex items-center w-full '>
                                <span className='relative w-full'>
                                    <img className='absolute right-3 top-1' src={Message} alt='Message' />
                                    <input className='bg-gray outline-none w-full h-[50px] px-16 rounded-2xl placeholder:text-white placeholder:font-normal' type='email' placeholder='ایمیل خود را وارد کنید.' />
                                </span>
                                <button className='bg-violet p-3 mx-2 rounded-2xl'>
                                    <img className='h-6' src={ArrowLeft} alt='ArrowLeft' />
                                </button>
                            </div>
                            <div className='bg-white p-5 w-full flex justify-between rounded-xl'>
                                <img className='px-5 h-32' src={Enamd} alt='Enamd' />
                                <img className='px-5 h-32' src={Kasbokar} alt='Kasbokar' />
                                <img className='px-5 h-32' src={Samandehi} alt='Samandehi' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-orange flex justify-between h-14 px-24 text-base items-center'>
                <p> &copy;کپی بخش یا کل هر کدام از مطالب تنها با کسب مجوز مکتوب امکان پذیر است.</p>
                <div className='flex'>
                    <img className='h-7 pl-2' src={Twitter} alt='Twitter' />
                    <img className='h-7 px-2' src={Instagram} alt='Instagram' />
                    <img className='h-7 px-2' src={Whatsapp} alt='Whatsapp' />
                    <img className='h-7 pr-2' src={Linkedin} alt='Linkedin' />
                </div>
            </div>
        </div>
    );
};

export default Footer;