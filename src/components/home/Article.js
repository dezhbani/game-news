import React from 'react';
import axios from 'axios';

const Article = ({ data }) => {
    const baseUrl = axios.defaults.baseURL
    return (
        <div className='flex rounded-[28px] group ease-in-out duration-500 hover:bg-[#36345a] bg-dark-gray text-lg my-5 p-3 first:mt-0 last:mb-0 h-1/3'>
            <div className='w-1/2'>
                <img alt='icon' className='rounded-[28px] h-56 object-cover object-top w-full' src={baseUrl + data.image} />
            </div>
            <div className='flex flex-col w-1/2 mx-7'>
                <div className='flex'>
                    {
                        data.tags.map((tag, index) => <div key={index} className='bg-violet text-violet text-sm group-hover:bg-[#D2CBFF] group-hover:text-white group-hover:bg-opacity-10 px-2 py-0.5 w-fit h-fit bg-opacity-10 rounded-[10px] mx-1' >{tag}</div>)
                    }
                </div>
                <h1 className='my-3 font-bold leading-10'>{data.title}</h1>
                <div className='flex items-center '>
                    <div className='bg-orange group-hover:bg-violet h-2.5 w-2.5 rounded-full'></div>
                    <p className='mx-2 text-sm text-[#808191] font-medium'>{data.readCount} نفر این مقاله را خوانده اند.</p>
                </div>
                <button className='bg-[#E4E4E41A] group-hover:bg-violet w-fit px-9 py-2 rounded-xl text-[10px] mt-2'>مشاهده مقاله</button>
            </div>
        </div>
    );
};

export default Article;