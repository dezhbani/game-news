import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const Image = ({ src, alt = 'image', className = '', imageClassName = ''}) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => setIsLoading(false);

    return (
        <div className={`relative ${className}`}>
            {
                isLoading && (
                    <Skeleton height="100%" width="100%" />
                )
            }
            <img
                src={src}
                onLoad={handleImageLoad}
                alt={alt}
                loading="lazy"
                className={`${imageClassName} ${isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'} absolute top-0 transition-all duration-500`}
            />
        </div>
    );
};

export default Image;
