import React, { memo } from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';
import {Navigation, Pagination, A11y, Autoplay} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Category from './category';
const Hero = memo(() => {
    return (
        <div>
            <div className=' grid grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='flex items-center gap-2 text-light_dark py-4'>
                    Chương trình giảm giá chào hè
                    <div className='flex items-center'>
                    <div className='border-[8px] border-secondary border-l-transparent border-t-transparent border-b-transparent'>
                        </div>
                        <div className='bg-secondary text-light px-2 rounded'>
                            Hot
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-light_dark py-4'>
                    Chương trình xã hàng 
                    <div className='flex items-center'>
                    <div className='border-[8px] border-secondary border-l-transparent border-t-transparent border-b-transparent'>
                        </div>
                        <div className='bg-secondary text-light px-2 rounded'>
                            Hot
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-light_dark py-4'>
                    Chương trình giảm giá sinh nhật 10 năm tuổi
                    <div className='flex items-center'>
                    <div className='border-[8px] border-secondary border-l-transparent border-t-transparent border-b-transparent'>
                        </div>
                        <div className='bg-secondary text-light px-2 rounded'>
                            Hot
                        </div>
                    </div>
                </div>
                <div className='flex items-center gap-2 text-light_dark py-4'>
                    Chương trình giảm giá sinh viên
                    <div className='flex items-center'>
                    <div className='border-[8px] border-secondary border-l-transparent border-t-transparent border-b-transparent'>
                        </div>
                        <div className='bg-secondary text-light px-2 rounded'>
                            Hot
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-2'>
                <div>
                    <Category/>
                </div>

                <div className=' col-span-2'>
                <Swiper
                    modules={[Navigation, Pagination, A11y,Autoplay ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                >
                    <SwiperSlide>
                        <img src="https://d3design.vn/uploads/%C3%A8doirrfjw3432.jpg" alt="banner"
                            className='object-cover w-full h-[300px] select-none'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://img.freepik.com/premium-vector/special-offer-final-sale-banner-red-background-illustration_275806-121.jpg" alt="banner"
                            className='object-cover w-full h-[300px] select-none'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://static.vecteezy.com/system/resources/previews/003/692/287/non_2x/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg" alt="banner"
                            className='object-cover w-full h-[300px] select-none'
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://cdn.printnetwork.com/production/assets/5966561450122033bd4456f8/imageLocker/blog-description/blog/sales_banners.jpg" alt="banner"
                            className='object-cover w-full h-[300px] select-none'
                        />
                    </SwiperSlide>
                </Swiper>
                </div>
                <div className='flex flex-col'>
                    <iframe width="100%" height={150}  src="https://www.youtube.com/embed/1FiCo3SbO8w?autoplay=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <img src="https://static.vecteezy.com/system/resources/previews/003/692/287/non_2x/big-sale-discount-promotion-banner-template-with-blank-product-podium-scene-graphic-free-vector.jpg" alt="" className='w-full h-[150px] object-conver' />
                </div>
            </div>
        </div>
    );
});
Hero.displayName = 'Hero'
export default Hero;