import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { convertSlug } from '../../utils';
const CardNewMore = memo(({data}) => {
    const {image, title, id} = data
    return (
        <div className='flex gap-2'>
            <img src={image} className="w-[100px] object-contain h-[80px]" alt="img"  />
            <Link to={`/news/${convertSlug(title)}-${id}.html`} className='hover:text-primary text-light_dark line-clamp-3 h-fit'>
                {title}
            </Link>
        </div>
    );
});

CardNewMore.displayName = 'CardNewMore'
export default CardNewMore;