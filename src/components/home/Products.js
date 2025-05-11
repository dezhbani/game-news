import React from 'react';
import Product from './Product';
import ProductHeader from './ProductHeader';

const Products = ({data}) => {
    return (
        <div className='mt-10 md:my-14'>
            <ProductHeader />
            <div className='flex justify-between py-8 max-lg:overflow-x-auto scrollbar-none'>
                {
                    data?.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;