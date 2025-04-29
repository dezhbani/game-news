import React, { useContext, useEffect, useState } from 'react';
import VideoPlayer from '../../modules/VideoPlayer';
import { customToast } from '../../utils/functions';
import { ProfileContext } from '../../contexts/UserContext';
import axios from 'axios';

// Icons
import SaveIcon from '../../assets/icons/SaveIcon'
import Share from '../../assets/icons/Share.svg'
import More from '../../assets/icons/More.svg'
import LikeIcon from '../../assets/icons/LikeIcon';

const TrailerVideo = ({ data }) => {
    const user = useContext(ProfileContext)
    const [like, setLike] = useState(null)
    const [save, setSave] = useState(null)
    const likeStatus = () => {
        const user = localStorage.getItem('currentUser')
        if(user){
            const status = JSON.parse(user)
            return !!status?.like
        }
    }

    const changeLikeStatus = () => {
        if (user) {
            const newStatus = !likeStatus()
            user.like = newStatus
            localStorage.setItem('currentUser', JSON.stringify(user))
            setLike(newStatus)
            customToast("success", newStatus ? "لایک شد!" : "لایک حذف شد!")
        }
        else customToast("error", "برای لایک کردن باید وارد حساب کاربری خود شوید")
         
    }
    const shareContent = () => {
        const originLoacation = window.location.origin
        if (navigator.share) {
            navigator.share({
                title: "I want whare this with you",
                text: "Check out this amazing website!",
                url: `${originLoacation}#trailer`,
            })
                .then(() => console.log("Shared successfully!"))
                .catch((error) => customToast("error", error));
        } else {
            customToast("error", "Web Share API is not supported in your browser.");
        }
    }
    const addToSavedList = () => {
        if (!user) customToast("error", "برای سیو کردن باید وارد حساب کاربری خود شوید")
        else {
            user.saved = !user.saved
            setSave(user.saved)
            localStorage.setItem('currentUser', JSON.stringify(user))
            customToast("success", user.saved? "به لیست علاقه مندی ها اضافه شد" : "از لیست علاقه مندی ها حذف شد")
        }
    }
    useEffect(() => {
        setLike(likeStatus())

    }, [])
    const baseUrl = axios.defaults.baseURL
    return (
        <div className='my-10' id='trailer'>
            <div className='bg-dark-gray h-fit shadow-lg rou shadow-[#F0F3F61A] rounded-[32px]'>
                <VideoPlayer video={baseUrl + data.video} posterImage={baseUrl + data.poster} />
                <div className='text-white'>
                    <div className='p-9 border-b border-b-[#F0F3F61A]'>
                        <h1 className='text-4xl font-semibold mb-8'>{data.title}</h1>
                        <p className='text-xl mb-2'>{data.description}</p>
                    </div>
                    <div className='flex justify-between items-center px-9 py-5 font-bold text-lg'>
                        <div className='flex'>
                            <div onClick={addToSavedList} className='flex px-6 py-5'>
                                <SaveIcon className={`ml-3 ${save ? "fill-white" : "fill-none"}`} />
                                <span>افزودن به لیست علاقه مندی ها</span>
                            </div>
                            <div onClick={shareContent} className='flex px-6 py-5'>
                                <img className='ml-3' src={Share} alt='icon' />
                                <span>اشتراک گذاری</span>
                            </div>
                            <div onClick={changeLikeStatus} className='flex px-6 py-5'>
                                <LikeIcon className={`ml-3 ${like ? "fill-white" : "fill-none"}`} />
                                <span>پسندیدم</span>
                            </div>
                        </div>
                        <div>
                            <button className='bg-[#E4E4E440] py-3.5 px-4 rounded-2xl'>
                                <img src={More} alt='icon' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrailerVideo;