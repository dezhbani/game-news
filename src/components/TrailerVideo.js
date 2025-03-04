import React from 'react';
import VideoPlayer from '../modules/VideoPlayer';

// Icons
import Favorites from '../assets/icons/Favorites.svg'
import Share from '../assets/icons/Share.svg'
import Like from '../assets/icons/Like.svg'
import More from '../assets/icons/More.svg'

// Videos
import Trailer from '../assets/trailer/Trailer.mp4'

const TrailerVideo = () => {
    const videoData = {
        title: "تریلر رسمی بازی Metal Gear Solid Delta: Snake Eater",
        description: "شایعه ساخت Metal Gear Solid Delta: Snake Eater قوت گرفت. طبق گفته ها و نشریات وابسته به استودیو های سازنده این عنوان خاطره انگیز، خبر های خوبی از ساخت نسخه ریمیک و یا همان بهبود یافته در راه است.",
        video: Trailer
    }
    return (
        <div className='my-10'>
            <div className='bg-dark-gray h-fit shadow-lg shadow-[#F0F3F61A] rounded-[32px]'>
                <VideoPlayer video={videoData.video} />
                <div className='text-white'>
                    <div className='p-9 border-b border-b-[#F0F3F61A]'>
                        <h1 className='text-4xl font-semibold mb-8'>{videoData.title}</h1>
                        <p className='text-xl mb-2'>{videoData.description}</p>
                    </div>
                    <div className='flex justify-between items-center px-9 py-5 font-bold text-lg'>
                        <div className='flex'>
                            <div className='flex px-6 py-5'>
                                <img className='ml-3' src={Favorites} alt='icon' />
                                <span>افزودن به لیست علاقه مندی ها</span>
                            </div>
                            <div className='flex px-6 py-5'>
                                <img className='ml-3' src={Like} alt='icon' />
                                <span>اشتراک گذاری</span>
                            </div>
                            <div className='flex px-6 py-5'>
                                <img className='ml-3' src={Share} alt='icon' />
                                <span>پسندیدم</span>
                            </div>
                        </div>
                        <div>
                            <button className='bg-[#E4E4E440] py-3.5 px-4 rounded-2xl'>
                                <img className='' src={More} alt='icon' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailerVideo;