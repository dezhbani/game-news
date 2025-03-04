import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import Arrow from '../assets/icons/RightArrow.svg'
import { textMaxLength } from '../utils/functions';

const ActiveArticle = ({ data, handleNext, handlePrev }) => {
    return (
        <div key={data.id} className="w-1/2 min-h-[790px] rounded-[40px] shadow-[2px_4px_30px_0px_#ffffff40] flex relative justify-center ml-5" >
            <div className='absolute z-40 left-0 ml-10 mt-14'>
                <button className='bg-white rounded-full mx-1 py-3.5 px-3' onClick={handleNext}><img alt='icon' src={Arrow} /></button>
                <button className='bg-white rounded-full mx-1 py-3.5 px-3' onClick={handlePrev}><img alt='icon' className='rotate-180' src={Arrow} /></button>
            </div>
            <img src={data.image} alt={`slide ${data.id}`} className="h-full w-full object-right object-cover rounded-[40px]" />
            <div class="absolute inset-0 rounded-[40px] bg-black opacity-30"></div>
            <div className='absolute right-0 top-2/3 mx-8'>
                <div className='flex'>
                    {
                        data.tags.map((tag, index) => <div key={index} className='bg-violet text-white px-2 py-0.5 w-fit h-fit bg-opacity-50 rounded-[10px] mx-1' >{tag}</div>)
                    }
                </div>
                <h1 className='text-[28px] font-bold mt-3'>{data.title}</h1>
                <p className='text-base font-bold mt-3 ml-10 w-2/3'>{textMaxLength(data.description)}</p>
                <Link to='#'><button className='bg-violet px-8 mt-3 py-2.5 rounded-2xl'>مشاهده مقاله</button></Link>
            </div>
        </div>
    );
};

export default ActiveArticle;