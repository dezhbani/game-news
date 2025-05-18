import React, { useState } from 'react';
import Skeleton from 'react-loading-skeleton';

const Image = ({
    src,
    alt = 'image',
    className = '',
    onLoadComplete = () => {}
}) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleImageLoad = () => {
        setIsLoading(false);
        onLoadComplete()
    }

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {isLoading && (
                <Skeleton
                    height="100%"
                    width="100%"
                    className={`absolute top-0 left-0 h-full w-full`}
                />
            )}
            <img
                src={src}
                onLoad={handleImageLoad}
                alt={alt}
                loading="lazy"
                className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 ${isLoading ? 'blur-sm scale-105' : 'blur-0 scale-100'}`}
            />
        </div>
    );
};

export default Image;
