import React, { memo } from 'react';
import Hero from '../../components/home/hero';
import ListProduct from '../../components/product/list-product';
import ListNewProduct from '../../components/product/list-new-product';
import CardNews from '../../components/news/card-news';

const Home = memo(() => {

    const data =  [
        {
            id: 1,
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
            id:3453451,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: false,
        },
        {
            id: 345,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 7567,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
        {
            id: 343456345,
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
            name: 'Điện thoại',
            price: 1000000,
            sale: 500000,
            isSale: true,
        },
    ]

    const news = [
        {
            id: 1,
            title: 'Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi voluptatum dolor cumque, amet rem dignissimos quibusdam rerum! Maxime perferendis quidem voluptas est, sint animi praesentium doloribus. Atque, pariatur nesciunt!',
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png'
        },
        {
            id: 2,
            title: 'Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A',
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur animi voluptatum dolor cumque, amet rem dignissimos quibusdam rerum! Maxime perferendis quidem voluptas est, sint animi praesentium doloribus. Atque, pariatur nesciunt!',
            image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png'
        },
    ]
    return (
        <div className='container_box flex flex-col gap-8'>
            <Hero/>
            <ListProduct variant='secondary' data={data}/>
            <ListNewProduct data={data}/>
            <ListProduct heading="Category" data={data}/>
            <ListProduct heading="Category" data={data}/>
            <ListProduct heading="Category" data={data}/>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                {
                    news.map((item) => (
                        <CardNews data={item} key={item.id}/>
                    ))
                }
            </div>
    </div>
    );
});

Home.displayName = 'Home'

export default Home;