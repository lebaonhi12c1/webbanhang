import React, { memo } from 'react';
import CardListNews from './card-list-news';
import { cn } from '../../utils/cn';
const ListNews = memo(({data=[], variant='primary'}) => {
    return (
        <div className='flex flex-col gap-4'>
             <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center">
                        <div
                            className={cn(
                                "p-2 rounded uppercase text-light",
                                {"bg-primary": variant === "primary"},
                                {"bg-secondary": variant === "secondary"}
                            )}
                        >
                            Tin tức
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
            <div className='flex flex-col gap-4'>
                {data.map(item => (
                    <div className="" key={item.id}>
                        <CardListNews data={item}/>
                    </div>
                ))}
            </div>
        </div>
    );
});

ListNews.displayName = 'ListNews'
export default ListNews;