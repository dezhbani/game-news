import React from 'react';
import Review from './Review';
import SectionTitle from '../../modules/SectionTitle';
import { Link } from 'react-router-dom';

const Reviews = ({ data }) => {
    return (
        <div className='my-10 md:my-16'>
            <SectionTitle title='جدیدترین نقد و بررسی ها' />
            <div className='flex flex-row my-5 scrollbar-none max-lg:overflow-x-auto'>
                {
                    data.map(review => <Review key={review.id} data={review} />)
                }
            </div>
            <div className='w-full flex justify-center'>
                <button className='bg-[#E4E4E41A] py-3 my-5 text-white text-base font-bold px-11 rounded-2xl'>
                    <Link to='#'>مشاهده همه</Link>
                </button>
            </div>
        </div>
    );
};

export default Reviews;