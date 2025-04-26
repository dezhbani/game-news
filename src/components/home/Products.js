import React from 'react';
import Product from './Product';
import ProductHeader from './ProductHeader';

const Products = ({data}) => {
    return (
        <div className='my-14'>
            <ProductHeader />
            <div className='flex justify-between my-8'>
                {
                    data?.map(product => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;