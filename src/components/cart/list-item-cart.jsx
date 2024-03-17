import React, { memo, useContext } from 'react';
import {formatNumber} from '../../utils'
import { cartContext } from '../../context/cart';
const ListItemCart = memo(({data}) => {
    // const {image, title, price, desc} = data
    const {removeItem, updateItem} = useContext(cartContext)

    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = {};
        for (let pair of formData.entries()) {
            formDataObject[pair[0]] = pair[1];
        }
        const item = {
            ...data,
            ...formDataObject
        }
        updateItem(item)
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
            <div>
                <img src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/15-Pro-nar1170930957.jpg" alt="" />
            </div>
            <div className='lg:col-span-2'>
                <div className='font-medium text-[18px]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed nihil porro sint repellendus doloribus debitis placeat, ipsum, repellat quidem autem nobis sapiente architecto explicabo quae perspiciatis molestias minus quos!
                </div>
                <div className='text-light_dark line-clamp-3'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis provident minima consequuntur asperiores dolore facere, non qui maiores, tempora corrupti iste? Aperiam excepturi asperiores in debitis illum totam odio perferendis.
                </div>
            </div>
            <div>
                <button className='bg-secondary p-2 text-light uppercase float-right hover:bg-dark_secondary'
                    onClick={() =>removeItem(data.id)}
                >
                    xóa
                </button>
                <div className='text-secondary text-[24px] break-words'>
                    {formatNumber(Number(data.price) * Number(data.quanlity))}đ
                </div>
               <form className='flex items-center flex-wrap gap-2' onSubmit={onSubmit}> 
                    <input type="number" min={1} className='border p-2 focus-visible:outline-primary' placeholder='Số lượng' name='quanlity' defaultValue={data.quanlity} />
                    <button className='p-2 text-light bg-primary uppercase whitespace-nowrap hover:bg-dark_primary'>
                        áp dụng
                    </button>
               </form>
            </div>
        </div>
    );
});
ListItemCart.displayName = 'ListItemCart'
export default ListItemCart;