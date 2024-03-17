import React, { memo } from 'react';
import {AiFillCaretRight, AiOutlineGlobal} from 'react-icons/ai'
const SidebarAds = memo(() => {
    return (
        <div className='flex flex-col gap-4'>
            <div>
                <div className='flex items-center bg-secondary p-2 uppercase text-light'>
                    <AiFillCaretRight/>
                    <span>hỗ trợ trực tuyến</span>
                </div>
                <div className='px-2 py-4 flex flex-col gap-4 bg-three'>
                    <div className='flex items-center gap-1'>
                        <AiOutlineGlobal/>
                        <span className=' uppercase font-medium'>kinh doanh hà nội</span>
                    </div>
                    <span>Mobile: 0967544325</span>
                    <span>Tel: 0967544325</span>
                </div>
                <div className='px-2 py-4 flex flex-col gap-4 bg-three'>
                    <div className='flex items-center gap-1'>
                        <AiOutlineGlobal/>
                        <span className=' uppercase font-medium'>kinh doanh hồ chí minh</span>
                    </div>
                    <span>Mobile: 0967544325</span>
                    <span>Tel: 0967544325</span>
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
SidebarAds.displayName = 'SidebarAds'
export default SidebarAds;