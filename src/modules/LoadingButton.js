import React from 'react';

const LoadingButton = ({children, loading, ...props}) => {
    return (
        <button {...props}>
            {
                loading ?
                    <div class="flex flex-row gap-2 justify-center">
                        <div class="w-3 h-3 rounded-full bg-white animate-bounce"></div>
                        <div class="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:-.3s]"></div>
                        <div class="w-3 h-3 rounded-full bg-white animate-bounce [animation-delay:-.5s]"></div>
                    </div>
                    : children
            }
        </button>
    );
};

export default LoadingButton;