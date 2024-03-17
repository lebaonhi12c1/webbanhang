import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import CardProduct from '../../components/product/product';
import FilterSidebar from '../../components/filter/filter-sidebar';
import { formatNumber } from '../../utils';

const Filter = memo(() => {
    const {search} = useLocation();
    const query = new URLSearchParams(search)
    const config = {
        name: query.get('name'),
        min: query.get('price_min'),
        max: query.get('price_max'),
    }
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
        <div className='container_box'>
            <div className='grid lg:grid-cols-5 grid-cols-1 gap-4'>
                <div className='border-r'>
                    <FilterSidebar/>
                </div>
                <div className='lg:col-span-4'>
                    <div className='text-[24px] text-right'>Kết quả của: <b className='text-primary'>{config['name']} { config['min'] && formatNumber(config['min'])} {config['max'] && 'đến ' + formatNumber(config['max'])}</b></div>
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-4 grid-cols-1'>
                        {
                            data.map((item, index) => (
                                <CardProduct key={index} data={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Filter;