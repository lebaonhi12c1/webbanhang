import React, { memo } from 'react';
import {AiFillTags, AiFillCaretRight} from 'react-icons/ai'
const NewsDetailsHeader = memo(() => {
    const {title, category, created_at} = {
        title: 'Đây là tiêu đề',
        category: 'Đây là chuyên mục',
        created_at: 'Đây là thời gian',
    }
    return (
        <div>
            <div className='flex items-center justify-between py-2 border-b-[4px]'>
                <div className='flex items-center gap-1 uppercase font-medium' >
                    <AiFillCaretRight/>
                    tin tức
                </div>
            <div className='flex items-center gap-2'>
                    <AiFillTags className='text-secondary'/>
                    <div className='font-medium'>
                        Chuyên mục:
                    </div>
                    <div className='text-light_dark'>{category}</div>
                </div>
            </div>
            <h1 className='font-medium text-[20px] uppercase py-2'>
                {title}
            </h1>
            <div className='flex items-center gap-2 text-light_dark'>
                <span>TV |</span>
                <div>
                    {created_at}
                </div>
            </div>
        </div>
    );
});

NewsDetailsHeader.displayName = 'NewsDetailsHeader'
export default NewsDetailsHeader;