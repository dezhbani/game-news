import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Arrow from '../../assets/icons/RightArrow.svg';
import Image from '../../modules/Image';

const ActiveArticle = ({ data, handleNext, handlePrev }) => {
    const baseUrl = axios.defaults.baseURL;
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        <div key={data.id} className="min-h-[500px] max-lg:min-w-full lg:w-1/2 lg:min-h-[790px] rounded-[40px] shadow-[2px_4px_30px_0px_#ffffff40] flex relative justify-center ml-5">
            {imageLoaded && (
                <div className="absolute z-40 left-0 ml-10 mt-14">
                    <button className="bg-white rounded-full mx-1 py-3.5 px-3" onClick={handleNext}>
                        <img alt="icon" src={Arrow} />
                    </button>
                    <button className="bg-white rounded-full mx-1 py-3.5 px-3" onClick={handlePrev}>
                        <img alt="icon" className="rotate-180" src={Arrow} />
                    </button>
                </div>
            )}

            <Image
                src={baseUrl + data.image}
                alt={`slide ${data.id}`}
                className="min-h-full w-full object-right object-cover rounded-[40px]"
                onLoadComplete={() => setImageLoaded(true)}
            />

            {imageLoaded && (
                <>
                    <div className="absolute inset-0 rounded-[40px] bg-black opacity-30"></div>
                    <div className="absolute right-0 max-h-1/2 top-1/2 lg:top-2/3 mx-8">
                        <div className="flex">
                            {data.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="bg-violet text-white px-2 py-0.5 w-fit h-fit bg-opacity-50 rounded-[10px] mx-1"
                                >
                                    {tag}
                                </div>
                            ))}
                        </div>
                        <h1 className="text-2xl lg:text-[28px] font-bold mt-3 line-clamp-2">{data.title}</h1>
                        <p className="text-base font-bold mt-3 ml-10 w-2/3 line-clamp-2">{data.description}</p>
                        <Link to="#">
                            <button className="bg-violet px-8 mt-3 top-full absolute py-2.5 rounded-2xl">
                                مشاهده مقاله
                            </button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default ActiveArticle;
