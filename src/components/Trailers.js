import React from 'react';

// Images
import TrailerImage1 from '../assets/trailer/trailer1.png'
import TrailerImage2 from '../assets/trailer/trailer2.jpeg'
import TrailerImage3 from '../assets/trailer/trailer3.png'
import TrailerImage4 from '../assets/trailer/trailer4.png'
import Trailer from './Trailer';
import { Link } from 'react-router-dom';

const Trailers = () => {
    const TrailerData = [
        {
            id: 1,
            title: "نخستین تریلر گیم‌پلی بازی Marvel’s Spider-Man 2 منتشر شد.",
            image: TrailerImage1,
            viewCount: 32,
            author: {
                name: "متین دژبانی",
                profileImage: TrailerImage4
            },
            publishTime: "یک ماه پیش"
        },
        {
            id: 2,
            title: "اوین لانچ تریلر سینمایی و لایو اکشن بازی Diablo 4 ",
            image: TrailerImage2,
            viewCount: 300,
            author: {
                name: "متین دژبانی",
                profileImage: TrailerImage4
            },
            publishTime: "دو هفته پیش"
        },
        {
            id: 3,
            title: "تریلر جذاب بازی Marathon",
            image: TrailerImage3,
            viewCount: 21,
            author: {
                name: "متین دژبانی",
                profileImage: TrailerImage4
            },
            publishTime: "سه روز پیش"
        },
        {
            id: 4,
            title: "تریلر نسخه جدید Call Of Duty Mobile",
            image: TrailerImage4,
            viewCount: 21,
            author: {
                name: "متین دژبانی",
                profileImage: TrailerImage4
            },
            publishTime: "دو روز پیش"
        },
    ]
    return (
        <div className='flex flex-col py-5'>
            <div className='flex flex-row-reverse'>
                {
                    TrailerData.map(trailer => <Trailer data={trailer} />)
                }
            </div>
            <div className='w-full flex justify-center mt-10'>
                <button className='bg-[#E4E4E41A] py-3 my-5 text-white text-base font-bold px-11 rounded-2xl'>
                    <Link to='#'>مشاهده همه</Link>
                </button>
            </div>
        </div>
    );
};

export default Trailers;