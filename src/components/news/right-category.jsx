import React, { memo } from 'react';
import {AiFillCaretRight} from 'react-icons/ai'
import {LiaEyeSolid} from 'react-icons/lia'
const RightCategory = memo(() => {
    
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <div className='flex items-center bg-secondary p-2 uppercase text-light'>
                    <AiFillCaretRight/>
                    <span>Danh mục tin</span>
                </div>
                <div className='flex flex-col gap-2 p-4 bg-three'>
                    <div className='flex items-center gap-2'>
                        <LiaEyeSolid/>
                        Tư vấn
                    </div>
                    <div className='flex items-center gap-2'>
                        <LiaEyeSolid/>
                        Tuyển dụng
                    </div>
                    <div className='flex items-center gap-2'>
                        <LiaEyeSolid/>
                        Tin tức
                    </div>
                </div>
            </div>
            <img src="https://i.pinimg.com/originals/dc/9c/ac/dc9cac1ac154269e8d09b35a5c2dbddf.png" alt="ads" />
            <div className='border'>
                <div className='flex items-center bg-primary p-2 uppercase text-light'>
                    <AiFillCaretRight/>
                    <span>có thể bạn quan tâm   </span>
                </div>
                <div className='px-2 py-4 flex flex-col gap-4 '>
                    <div className=' font-medium'>
                        So sánh Camera: Galaxy S7 & LG v10
                    </div>
                    <div className='text-light_dark'>
                        Team LV | 05/05/2023
                    </div>
                </div>
                <div className='px-2 py-4 flex flex-col gap-4 '>
                    <div className=' font-medium'>
                        So sánh Camera: Galaxy S7 & LG v10
                    </div>
                    <div className='text-light_dark'>
                        Team LV | 05/05/2023
                    </div>
                </div>
                <div className='px-2 py-4 flex flex-col gap-4 '>
                    <div className=' font-medium'>
                        So sánh Camera: Galaxy S7 & LG v10
                    </div>
                    <div className='text-light_dark'>
                        Team LV | 05/05/2023
                    </div>
                </div>
            </div>
        </div>
    );
});

RightCategory.displayName = 'RightCategory'
export default RightCategory;