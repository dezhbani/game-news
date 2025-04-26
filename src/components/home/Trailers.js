import React from 'react';
import Trailer from './Trailer';
import { Link } from 'react-router-dom';

const Trailers = ({data}) => {
    console.log(data);
    
    return (
        <div className='flex flex-col py-5'>
            <div className='flex flex-row-reverse'>
                {
                    data.map(trailer => <Trailer key={trailer.id} data={trailer} />)
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