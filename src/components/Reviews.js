import React from 'react';
import Review from './Review';
import SectionTitle from '../modules/SectionTitle';
import { Link } from 'react-router-dom';

// Images
import review1 from '../assets/reviews/review1.jpeg'
import review2 from '../assets/reviews/review2.png'
import review3 from '../assets/reviews/review3.jpeg'

const Reviews = () => {
    const data = [
        {
            id: 1,
            title: 'ویدیو نقد و بررسی بازی',
            name: 'Alan Wake 2',
            image: review1
        },
        {
            id: 2,
            title: 'ویدیو نقد و بررسی بازی',
            name: 'The Last of Us Part 1',
            image: review2
        },
        {
            id: 3,
            title: 'ویدیو نقد و بررسی بازی',
            name: 'Metal Gear Solid Delta: Snake Eater',
            image: review3
        },
    ]
    return (
        <div className='my-16'>
            <SectionTitle title='جدیدترین نقد و بررسی ها' />
            <div className='flex flex-row my-5 mr-5'>
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