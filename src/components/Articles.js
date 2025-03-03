import React, { useState } from 'react';
import Article from './Article';
import article1 from '../assets/article/article1.png'
import article2 from '../assets/article/article2.png'
import article3 from '../assets/article/article3.png'
import article4 from '../assets/article/article4.png'

import ActiveArticle from './ActiveArticle';
import SectionTitle from '../modules/SectionTitle';
const Articles = () => {
    const [active, setActive] = useState({
        id: 1,
        title: "بازی Hello Neighbor منتشر شد",
        description: "سلام همسایه از خاص ترین، زیباترین و محبوب ترین بازیهای ماجراجویی – ترسناک با ساخت فوق العاده از tinyBuild برای اندروید است که دقایقی پیش ...",
        image: article1,
        tags: ['سبک پازل', 'بازی های فکری'],
        readCount: 700
    })
    const articles = [
        {
            id: 1,
            title: "بازی Hello Neighbor منتشر شد",
            description: "سلام همسایه از خاص ترین، زیباترین و محبوب ترین بازیهای ماجراجویی – ترسناک با ساخت فوق العاده از tinyBuild برای اندروید است که دقایقی پیش ...",
            image: article1,
            tags: ['سبک پازل', 'بازی های فکری'],
            readCount: 700
        },
        {
            id: 2,
            title: "بازی NBA 2K 2023 رکورد پرفروش ترین بازی ورزشی را شکست.",
            description: "NBA 2K 2023 توانست با گرافیک فوق‌العاده، حالت‌های بازی جدید، و واقعیت‌افزوده، رکورد فروش بیشترین بازی ورزشی را شکسته و تجربه بسکتبال را به سطحی ناموصوف برساند. برای عشاق ورزش و بازی‌های رقابتی، این نسخه یک پرش زیبا به جهان ورزش الکترونیکی است.",
            image: article4,
            tags: ['اخبار', 'ورزشی'],
            readCount: 200
        },
        {
            id: 3,
            title: "نسخه جدید اساسینس کرید با عنوان (میراژ) منتشر شد.",
            description: "Assassin's Creed Mirage بازگشتی به ریشه‌های سری بازی‌های اکشن-ماجراجویی معروف اساسینس کرید است. در این نسخه، بازیکنان به دنیای پر از راز و تاریخی شهر بغداد سفر می‌کنند و با داستانی جذاب و شخصیت‌های چالش‌برانگیز رو به رو می‌شوند.",
            image: article2,
            tags: ['اکشن', 'بازی های جدید'],
            readCount: 542
        },
        {
            id: 4,
            title: "موسیقی بازی The Last of Us رکورد دار بیشترین دانلود.",
            description: "موسیقی The Last of Us با الهام‌بخش بودن و عمق احساسی خود، توانست رکورد بیشترین دانلود را به دست آورد. این موسیقی، که با داستان محنت‌آمیز و جهانی ویران شده بازی همخوانی می‌کند، یادآور اهمیت صدا در تجربه گیمپلی است.",
            image: article3,
            tags: ['موسیقی'],
            readCount: 32
        },
    ]
    const handleNext = () => {
        const activeIndex = articles.findIndex(item => item.id === active.id)
        const activeArticle = (activeIndex + 1) % articles.length
        const nextActiveIndex = activeArticle === 0 ? 0 : activeIndex + 1
        setActive(articles[nextActiveIndex])
    }
    const handlePrev = () => {
        const activeIndex = articles.findIndex(item => item.id === active.id)
        const activeArticle = activeIndex - 1 < 0 ? articles.length - 1 : activeIndex - 1
        setActive(articles[activeArticle])
    }
    return (
        <>
            <SectionTitle title='جدیدترین مقالات' />
            <div className='text-white flex my-5'>
                <ActiveArticle data={active} handlePrev={handlePrev} handleNext={handleNext} />
                <div className='flex flex-col w-1/2 mr-5'>
                    {
                        articles.filter(article => article.id !== active.id).map(article => <Article data={article} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Articles;