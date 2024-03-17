import React, { memo, useContext, useState } from 'react';

import { cn } from '../../utils/cn';
import {formatNumber} from '../../utils'

import SidebarAds from '../../components/sidebar-ads';
import ListProduct from '../../components/product/list-product';
import { cartContext } from '../../context/cart';
import { userContext } from '../../context/user';
import { useNavigate } from 'react-router-dom';

const ProductDetails = memo(() => {
    const {addItem} = useContext(cartContext)
    const { user } = useContext(userContext)
    const navigate = useNavigate()
    const data = {
        id: 1,
        image: 'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-thumbtz-650x650.png',
        name: 'Điện thoại Iphone 15 Pro max, 15 Pro, 15 Pro max, Store Premium, Chính hãng VN/A',
        thumb: [
            {
                image: 'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-thumbtz-650x650.png',
                id: '334dd44hh465'
            },
            {
                image: 'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-pro-natural-titanium-pure-back-iphone-15-pro-natural-titanium-pure-front-2up-screen-usen.png',
                id: '334dd44hh488'
            },
            {
                image: 'https://minmobile.net.vn/images/product/43396131031667810142-iphone-14-pro-max-gia-re-1tb-minmobile_result.webp',
                id: '334dd44hh344'
            },
        ],
        price: 45000000,
        sale: 500000,
        isSale: true,
    }
    const [active, setActive] = useState(data.thumb[0])
    const [tab, setTab] = useState(1)
    const products =  [
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

    const onSubmit = e => {
        e.preventDefault();
        if(!user){
            navigate('/login')
            return
        }
        const formData = new FormData(e.target);
        const formDataObject = {};
        for (let pair of formData.entries()) {
            formDataObject[pair[0]] = pair[1];
        }
        const item = {
            ...data,
            id: Math.ceil(Math.random() * 1000),
            ...formDataObject
        }
        // console.log(item)
        addItem(item)
    }
    return (
        <div className='container_box '>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-5'>
                <div className='col-span-4 flex flex-col gap-4'>
                    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
                        <div className='grid grid-cols-5 border h-fit gap-2 p-2'>
                            <div className='flex flex-col gap-2'>
                                {
                                    data?.thumb?.map((item) => (
                                        <img src={item.image} key={item.id} alt="img-product-sub" 
                                            className={cn(
                                                'w-full h-[100px] object-contain border',
                                                { 'border-primary border-2': active.id === item.id }
                                            )}
                                            onClick={() => setActive(item)}
                                        />
                                    ))
                                }
                            </div>
                            <div className='col-span-4'>
                                <img src={active.image} alt="img-product" className=' w-full object-contain h-[300px] lg:h-[400px]' />
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <h1 className='text-[24px] font-medium'>{data?.name}</h1>
                            <div className='flex items-center justify-between'>
                                <div className='flex items-baseline gap-2'>
                                    <span className='font-medium text-[20px]'>Giá:</span>
                                    <div className='text-secondary font-medium text-[24px]'>
                                        {formatNumber(data?.price)} đ
                                    </div>
                                </div>
                                <div className='p-2 text-light bg-primary'>
                                    Còn hàng
                                </div>
                            </div>
                            <form className='flex items-center gap-2' onSubmit={onSubmit}>
                                <input type="number" className='p-2 focus-visible:outline-primary border' placeholder='Số lượng' min={1} required name='quanlity'
                                    defaultValue={1}
                                />
                                <button type='submit' className='bg-primary hover:bg-dark_primary text-light p-2'>
                                    Thêm vào giỏ hàng
                                </button>
                                <button type='submit' className='bg-secondary hover:bg-dark_secondary text-light p-2'>
                                    Mua ngay
                                </button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div className='grid grid-cols-2 bg-three'>
                            <button className={cn(
                                'p-2',
                                { 'bg-primary text-light': tab === 1 },
                            )}
                                onClick={() => setTab(1)}
                            >
                                Thông tin sản phẩm
                            </button>
                            <button className={cn(
                                'p-2',
                                { 'bg-primary text-light': tab === 2 },
                                
                            )}
                                onClick={() => setTab(2)}
                            >
                                Thông tin giao hàng
                            </button>
                        </div>
                        {tab === 1 && (
                            <div className="py-4 text-light_dark">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
    
                            </div>
                        )}
                        {tab === 2 && (
                            <div className="py-4 text-light_dark">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimus non quidem nostrum asperiores placeat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error quas non dicta amet, voluptatibus numquam quam atque eos est. Excepturi accusamus quis voluptates possimu
    
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <SidebarAds/>
                </div>
            </div>
            <ListProduct title="Sản phẩm liên quan" data={products} />
        </div>
    );
});
ProductDetails.displayName = 'ProductDetails'
export default ProductDetails;