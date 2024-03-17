import React, { memo } from 'react';
import {AiFillTags} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { convertSlug } from '../../utils';
const CardListNews = memo(({data = {}}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <Link to={'/news/' + data.id} className='h-[200px] overflow-hidden flex items-center justify-center'>
                <img src={data.image} alt="img-news"
                    className=' object-cover w-full hover:scale-105 duration-200'
                />
            </Link>
            <div className='lg:col-span-2 flex flex-col gap-2'>
                <Link to={`/news/${convertSlug(data.title)}-${data.id}.html`} className=' font-medium text-[18px] text-primary hover:underline'>
                    {data.title}
                </Link >
                <div className='text-light_dark text-[14px] flex items-center gap-2'>
                    <span>TV |</span>
                    {data.created_at}
                </div>
                <div className='line-clamp-3'>
                    {data.desc}
                </div>
                <div className='flex items-center gap-2'>
                    <AiFillTags className='text-secondary'/>
                    <div className='font-medium'>
                        Chuyên mục:
                    </div>
                    <div className='text-light_dark'>{data.category}</div>
                </div>
            </div>
        </div>
    );
});

CardListNews.displayName = 'CardListNews'

export default CardListNews;