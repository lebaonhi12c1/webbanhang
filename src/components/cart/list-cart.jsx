import React, { memo, useContext } from "react";
import ListItemCart from "./list-item-cart";
import { cartContext } from "../../context/cart";
import { Link } from "react-router-dom";

const ListCart = memo(() => {
    const { cart } = useContext(cartContext);
    return (
        <div className="flex flex-col gap-2">
            <div className="w-[300px]h-[300px] flex flex-col items-center">
                {cart.length < 1 && (
                    <div className="flex flex-col items-center">
                        <img
                            src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
                            alt=""
                            className=" object-contain"
                        />
                        <Link to={"/products"}>
                            <button className="bg-primary p-2 text-light uppercase hover:bg-dark_primary">
                                bắt đầu mua sắm
                            </button>
                        </Link>
                    </div>
                )}
            </div>
            {cart.length > 0 &&
                cart.map((item, index) => (
                    <div className="" key={index}>
                        <ListItemCart data={item} />
                    </div>
                ))}
        </div>
    );
});
ListCart.displayName = "ListCart";
export default ListCart;
