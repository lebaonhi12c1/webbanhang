import React, { memo } from 'react';
import {AiFillCaretRight } from 'react-icons/ai'
import CardNewMore from './card-new-more';
const NewsDetailsMore = memo(() => {
    const data = [
        {
            id: 1,
            title:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates fugiat, maiores, labore id dolore, ea quos officiis asperiores aperiam consectetur. Obcaecati rerum non dolorem harum consequatur minus, hic vel.',
            image: 'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-thumbtz-650x650.png',
        },
        {
            id: 3,
            title:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates fugiat, maiores, labore id dolore, ea quos officiis asperiores aperiam consectetur. Obcaecati rerum non dolorem harum consequatur minus, hic vel.',
            image: 'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-thumbtz-650x650.png',
        },
        {
            id: 5,
            title:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates fugiat, maiores, labore id dolore, ea quos officiis asperiores aperiam consectetur. Obcaecati rerum non dolorem harum consequatur minus, hic vel.',
            image: 'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-thumbtz-650x650.png',
        },
        {
            id: 2,
            title:' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptates fugiat, maiores, labore id dolore, ea quos officiis asperiores aperiam consectetur. Obcaecati rerum non dolorem harum consequatur minus, hic vel.',
            image: 'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-thumbtz-650x650.png',
        },
    ]
    return (
        <div>
            <div className='flex items-center justify-between py-2 border-b-[4px]'>
                <div className='flex items-center gap-1 uppercase font-medium' >
                    <AiFillCaretRight/>
                    tin liên quan
                </div>  
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 mt-4'>
                    {data.map(item => (
                        <div className="" key={item.id}>
                            <CardNewMore data={item}/>
                        </div>
                    ))}
            </div>
        </div>
    );
});
NewsDetailsMore.displayName = 'NewsDetailsMore'
export default NewsDetailsMore;