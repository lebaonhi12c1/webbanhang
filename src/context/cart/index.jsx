import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export const cartContext = createContext()
function CartContext({children}) {
    const [cart, setCart] = useState([])
    
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('cart')) || [])
    },[])

    const setLocalStorage = (value) => {
        localStorage.setItem('cart', JSON.stringify(value))
    }

    const addItem = item => {
        console.log(item)
        const index = cart.findIndex(cart => cart.id === item.id);
        if (index !== -1) {
            console.log('render')
            // Cập nhật dữ liệu nếu phần tử đã tồn tại
            cart[index] = Number(cart[index].quanlity) + 1;
            setCart(cart)
            setLocalStorage(cart)
        } else {
            console.log('renderel')

            // Thêm phần tử mới nếu không tồn tại
            setCart([...cart, item]);
            setLocalStorage([...cart, item])
        }

    }

    const removeItem = id => {
        const data = cart.filter(item => item.id !== id)
        setCart(data)
        setLocalStorage(data)
    }

    const getTotal = () => {
        return cart.reduce((total, item) => total + Number(item.price) * Number(item.quanlity), 0)
    }

    const updateItem = (item) => {
        setCart(cart.map(cart => cart.id === item.id ? item : cart))
    }

    return (
        <cartContext.Provider value={{
            cart,
            addItem,
            removeItem,
            getTotal,
            updateItem,
        }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContext;