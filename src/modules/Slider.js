import React, { useEffect, useState } from 'react';
import ArrowRight from '../../assets/icons/SmallRight.svg';
import ArrowLeft from '../../assets/icons/SmallLeft.svg';
import Card from './Card';

const Slider = ({ data }) => {
    const [active, setActive] = useState(2);
    const [slider, setSlider] = useState({ start: 0, end: 4, max: 4 });
    const card = { 
        tag: "مقاله جدید", 
        title: "Call of Duty Warzone", 
        content: "مانند دیگر بازی‌های بتل رویال سوار یک هواپیما خواهید شد و روی نقشه فرود خواهید آمد. وجه تفاوت این بازی نسبت به بقیه در تعداد بازیکنان آن است.",
        comments: 20
    };

    const rightButton = () => {
        let nextActive = (active + 1) % data.length;
        setActive(nextActive);

        if (nextActive === 0) {
            setSlider({ start: 0, end: slider.max, max: slider.max });
        } else if (nextActive >= slider.end) {
            const newEnd = Math.min(slider.end + 1, data.length);
            setSlider({ start: slider.start + 1, end: newEnd, max: slider.max });
        }
    };

    const leftButton = () => {
        let nextActive = active - 1 < 0 ? data.length - 1 : active - 1;
        setActive(nextActive);

        if (nextActive === data.length - 1) {
            const newStart = data.length - slider.max < 0 ? 0 : data.length - slider.max;
            setSlider({ start: newStart, end: data.length, max: slider.max });
        } else if (nextActive < slider.start) {
            const newStart = Math.max(0, slider.start - 1);
            const newEnd = slider.start + slider.max;
            setSlider({ start: newStart, end: newEnd - 1, max: slider.max });
        }
    };
    useEffect(() => {
        const interval = setInterval(() => {
            rightButton();
        }, 5000);

        return () => clearInterval(interval);
    }, [active]);
    return (
        <div className='h-full'>
            <div className='absolute z-30 left-32 top-[360px]'>
                <Card data={card}  />
            </div>
            <div className='mb-6 mt-16 relative max-w-full mx-auto h-[500px] overflow-hidden'>
                <div className="absolute top-0 left-0 w-full h-full transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${active * 100}%)` }}>
                    {data.map((slide, index) => (
                        <div key={index} className="w-full h-full flex items-center justify-center absolute top-0 left-0" style={{ transform: `translateX(${index * 100}%)` }} >
                            <img src={slide} alt={`slide ${index}`} className="h-full w-full object-cover rounded-[40px]" />
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-fit my-7 mx-4'>
                <div className="relative h-full w-full">
                    <div className="absolute inset-y-0 flex justify-between w-full items-center">
                        <span className="rounded-full bg-violet flex items-center w-fit p-2 cursor-pointer" onClick={rightButton}>
                            <img className="h-3.5 w-3.5" src={ArrowRight} alt='ArrowRight' />
                        </span>
                        <span className="rounded-full bg-violet flex items-center w-fit p-2 cursor-pointer" onClick={leftButton}>
                            <img className="h-3.5 w-3.5" src={ArrowLeft} alt='ArrowLeft' />
                        </span>
                    </div>

                    <div className="flex dir-ltr items-center">
                        {data.slice(slider.start, slider.end).map((slide, i) => (
                            <div key={slider.start + i} className={`mx-2 ${active === slider.start + i ? 'bg-dark-gray shadow-[0px_4px_3px_rgba(27, 29, 33, 1)] p-1.5 rounded-lg' : ''}`}>
                                <img className="h-14 w-24 rounded-lg" alt={`slide ${i}`} src={slide} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;