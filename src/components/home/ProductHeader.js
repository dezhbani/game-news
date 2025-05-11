import React, { useState } from 'react';
import useQuery from '../../hooks/useQuery';
import { Link } from 'react-router-dom';

// Icons
import Arrow from '../../assets/icons/SmallLeft.svg'
import { textMaxLength } from '../../utils/functions';

const ProductHeader = () => {
    const [open, setOpen] = useState(false)
    const dropdown = ["جدید ترین", "پرفروش ترین", "ارزانترین"]
    const handleDropdown = () => setOpen(!open)
    const handleClose = () => setOpen(false)
    const query = useQuery()
    return (
        <div className='w-full text-white max-sm:flex-col flex items-center justify-between'>
            <h1 className='font-bold text-xl lg:text-3xl'>جدیدترین بازی های فروشگاه</h1>
            <div className='flex flex-col max-sm:mt-5 font-semibold'>
                <div className='bg-[#E4E4E4] bg-opacity-10 rounded-[18px] dir-rtl min-w-64 flex justify-between items-center px-5 py-3' onClick={handleDropdown}>
                    <span className={`text-[#808191] ${open && 'text-slate-200 dir-rtl'}`}>{textMaxLength(query.sort, 20) || "پیش فرض"}</span>
                    <img className={open ? "rotate-90" : "-rotate-90"} alt='Arrow' src={Arrow} />
                </div>
                <div className={`relative z-20 transition-opacity duration-500 ease-in-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                    <ul className='absolute top-2 bg-[rgb(67,67,67)] rounded-[18px] w-full'>
                        {
                            dropdown.map((item, index) => <li key={index} onClick={handleClose} className='border-b text-slate-200 px-5 py-3 last:border-none border-gray-700'>
                                <Link to={`/?sort=${item}`}>
                                    {item}
                                </Link>
                            </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductHeader;