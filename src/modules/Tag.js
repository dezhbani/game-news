import React from 'react';

const Tag = ({color, children, radius}) => {
    const tagColor = color? `bg-[${color}] text-[${color}]` : 'bg-[#FF754C] text-[#FF754C]'
    return (
        <div className={`${tagColor} px-2 py-0.5 w-fit h-fit bg-opacity-15 ${radius || 'rounded-full'}`}>
            {
                children
            }
        </div>
    );
};

export default Tag;