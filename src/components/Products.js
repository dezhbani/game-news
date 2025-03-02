import React from 'react';

import ProductImage1 from '../assets/fifa.png';
import ProductImage2 from '../assets/fortnite.jpg';
import ProductImage3 from '../assets/diablo.jpg';
import ProductImage4 from '../assets/CallOfDuty.png';
import Product from './Product';
import ProductHeader from './ProductHeader';

const Products = () => {
    const data = [
        {
            name: 'بازی FIFA 23 برای کنسول پلی استیشن ۵',
            price: "قیمت 4/500 هزار تومان",
            image: ProductImage1,
            buyerCount: 257
        },
        {
            name: 'بازی Fortnite برای کنسول پلی استیشن ۵',
            price: "قیمت 3/450 هزار تومان",
            image: ProductImage2,
            buyerCount: 257
        },
        {
            name: 'بازی Diablo 4 برای کنسول پلی استیشن ۵',
            price: "قیمت 3/6500 هزار تومان",
            image: ProductImage3,
            buyerCount: 257
        },
        {
            name: 'بازی Call Of Duty برای کنسول پلی استیشن ۵',
            price: "قیمت 2/300 هزار تومان",
            image: ProductImage4,
            buyerCount: 257
        },
    ]
    
    return (
        <div className='my-14'>
            <ProductHeader />
            <div className='flex justify-between my-8'>
                {
                    data.map(product => <Product product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;