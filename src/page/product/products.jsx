import React, { memo, useState } from 'react';
import CardProduct from '../../components/product/product';
import Pagination from '../../components/pagination';

const Products = memo(() => {
    const [current, setCurrent] = useState(1);
    const data =  [
        {
            id: 345,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 346,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 24556,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 14456,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 3451,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 1768,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 34577341,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 1323415,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 356896,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 23445,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 1456786,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 23331,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 15534,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 1777,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 154567,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 367,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 2567878,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 145654,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 45651,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 5461,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 15677,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 5671,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 3,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 2,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 1,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 1,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 1,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 1,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
    ]
    return (
        <div className='container_box flex flex-col gap-10'>
            <div className=''>
                <img src="https://pixlr.com/images/mobile/banner.webp" alt=""
                    className='h-[250px] w-full object-contain shadow-md shadow-primary rounded'
                />
            </div>
            <div className='flex items-center justify-between'>
                <h5 className='text-[20px] font-medium'>Tất cả sản phẩm</h5>
            </div>
            
            <div className='grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
                {
                    data.map((item, index) => (
                        <CardProduct key={index} data={item} />
                    ))
                }
            </div>

           <div className='flex justify-center'> 
                <Pagination total_row={500} per_page={30} current={current} handleSetCurrent={setCurrent}/>
            </div>
        </div>
    );
});

Products.displayName = 'Products'

export default Products;