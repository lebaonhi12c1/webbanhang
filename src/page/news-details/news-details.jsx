import React, { memo } from 'react';
import NewsDetailsHeader from '../../components/hews-details/new-details-header';
import RightCategory from '../../components/news/right-category';
import NewsDetailsMore from '../../components/hews-details/news-details-more';
import FormComent from '../../components/hews-details/form-coment';
const NewsDetails = memo(() => {
    return (
        <div className='container_box'>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
                <div className='lg:col-span-4'>
                    <NewsDetailsHeader/>

                </div>
                <RightCategory/>
            </div>
            <NewsDetailsMore/>
            <FormComent/>
        </div>
    );
});

NewsDetails.displayName = 'NewsDetails'
export default NewsDetails;