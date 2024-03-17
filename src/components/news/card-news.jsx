import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { convertSlug } from '../../utils';
const CardNews = memo(({data = {}, variant = 'primary', heading='Tin tức'}) => {
    return (
        <div className='shadow p-4 rounded'>
            <div className="flex items-center justify-between py-2 border-b">
                <div className="flex items-center">
                    <div
                        className={cn(
                            "p-2 rounded uppercase text-light",
                            {"bg-primary": variant === "primary"},
                            {"bg-secondary": variant === "secondary"}
                        )}
                    >
                        {heading}
                    </div>
                    <div
                        className={cn(
                            "border-[10px] border-transparent",
                            {"border-l-primary": variant === "primary"},
                            {"border-l-secondary": variant === "secondary"}
                        )}
                    ></div>
                </div>
            </div>
            <div className=' grid-cols-1 grid lg:grid-cols-5 mt-4'>
                <div className='lg:col-span-2'>
                    <img src={data.image} alt="" />
                </div>
                <div className='lg:col-span-3'>
                    <div className='flex flex-col gap-2'>
                        <h5 className='font-medium'>{data.title}</h5>
                        <p className='text-[14px] line-clamp-5 text-light_dark'>{data.content}</p>
                        <Link to={`/news/${convertSlug(data.title)}-${data.id}.html`} className='hover:text-primary italic underline'>
                            Chi tiết
                        </Link>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
});

export default CardNews;