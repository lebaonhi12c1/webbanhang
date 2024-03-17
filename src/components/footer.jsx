import React, { memo } from 'react';
import Letter from './letter';

const Footer = memo(() => {
    return (
        <div>
            <Letter/>
            <div className='bg-three py-8'>
                <div className='container_box grid grid-cols-1 lg:grid-cols-6 gap-4'>
                    <div className=' lg:col-span-2'>
                        <div className='text-primary uppercase mb-4'>
                            công ty cổ phần thông tin mạng Việt Nam
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className=' font-bold'>TP. Hồ Chí Minh</span>
                            <span className='text-light_dark'>344 Trần Văn Khởi, phường 6, quận 3, TP. Hồ Chí Minh</span>
                            <span className='text-light_dark'>Tel: 0954575334</span>
                            <span className='text-light_dark'>Email: qjT7d@example.com</span>
                            <span className='text-light_dark'>Fax: 0123456789</span>
                        </div>
                    </div>
                   <div>
                        <div className='flex flex-col gap-1'>
                            <div className='uppercase font-bold'>
                                giới thiệu chung
                            </div>
                            <div className='text-light_dark'>
                                Gốc văn hóa
                            </div>
                            <div className='text-light_dark'>
                                Tin tức khuyến mãi
                            </div>
                            <div className='text-light_dark'>
                                Gốc văn hóa
                            </div>
                            <div className='text-light_dark'>
                                Tin tức khuyến mãi
                            </div>
                            <div className='text-light_dark'>
                                Gốc văn hóa
                            </div>
                            <div className='text-light_dark'>
                                Tin tức khuyến mãi
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mt-4'>
                            <div className='uppercase font-bold'>
                                kết nối với chúng tôi
                            </div>
                            <div className='flex items-center flex-wrap gap-2'>
                                <div className='p-1 rounded bg-primary text-light'>
                                    Facebook
                                </div>
                                <div className='p-1 rounded bg-primary text-light'>
                                    Google
                                </div>
                                <div className='p-1 rounded bg-primary text-light'>
                                    Youtube
                                </div>
                            </div>
                        </div>
                   </div>
                   <div>
                        <div className='flex flex-col gap-1'>
                            <div className='uppercase font-bold'>
                                hỗ trợ mua hàng
                            </div>
                            <div className='text-light_dark'>
                                Gốc văn hóa
                            </div>
                            <div className='text-light_dark'>
                                Tin tức khuyến mãi
                            </div>
                            <div className='text-light_dark'>
                                Gốc văn hóa
                            </div>
                            <div className='text-light_dark'>
                                Tin tức khuyến mãi
                            </div>
                            <div className='text-light_dark'>
                                Gốc văn hóa
                            </div>
                            <div className='text-light_dark'>
                                Tin tức khuyến mãi
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 mt-4'>
                            <div className='uppercase font-bold'>
                                chính sách chung
                            </div>
                            <div className='text-light_dark'>
                                Gốc văn hóa
                            </div>
                            <div className='text-light_dark'>
                                Tin tức khuyến mãi
                            </div>
                            <div className='text-light_dark'>
                                Gốc văn hóa
                            </div>
                            <div className='text-light_dark'>
                                Tin tức khuyến mãi
                            </div>
                            <div className='text-light_dark'>
                                Gốc văn hóa
                            </div>
                            <div className='text-light_dark'>
                                Tin tức khuyến mãi
                            </div>
                        </div>
                   </div>
                    <div className=' lg:col-span-2'>
                        <div className='uppercase font-bold'>
                            cách thức thanh toán
                        </div>
                        <img src="https://payment.page/wp-content/uploads/2022/03/Payments-Cloud.svg" alt="payment" className='object-contain h-full w-full' />
                    </div>
                </div>
            </div>
            <div className='bg-dark p-4'>

            </div>
        </div>
    );
});
Footer.displayName = 'Footer'
export default Footer;