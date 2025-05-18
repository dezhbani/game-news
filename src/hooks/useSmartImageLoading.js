import { useEffect, useState } from 'react';

const useSmartImageLoading = (ref, threshold = 300) => {
    const [loadingType, setLoadingType] = useState('lazy');

    useEffect(() => {
        const determineLoading = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                if (rect.top < threshold) {
                    setLoadingType('eager');
                } else {
                    setLoadingType('lazy');
                }
            }
        };

        determineLoading();
        window.addEventListener('scroll', determineLoading);
        return () => window.removeEventListener('scroll', determineLoading);
    }, [ref, threshold]);

    return loadingType;
};

export default useSmartImageLoading;
