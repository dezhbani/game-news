import React, { useState } from 'react';
import Article from './Article';

import ActiveArticle from './ActiveArticle';
import SectionTitle from '../../modules/SectionTitle';

const Articles = ({ data: articles }) => {
    const [active, setActive] = useState(articles[0])
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
                        articles.filter(article => article.id !== active.id).map(article => <Article key={article.id} data={article} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Articles;