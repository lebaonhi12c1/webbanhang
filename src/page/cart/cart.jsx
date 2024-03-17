import React, { memo } from 'react';
import BoxTotal from '../../components/cart/box_total';
import ListCart from '../../components/cart/list-cart';

const Cart = memo(() => {
    return (
        <div className='container_box'>
            <div className='grid grid-cols-1 lg:grid-cols-5 gap-4'>
                <div className='lg:col-span-4'>
                    <ListCart/>
                </div>
                <div>
                    <BoxTotal/>
                </div>
            </div>
        </div>
    );
});
Cart.displayName = 'Cart'
export default Cart;