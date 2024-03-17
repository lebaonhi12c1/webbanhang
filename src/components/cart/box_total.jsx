import React, { memo, useContext } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { cartContext } from "../../context/cart";
import { formatNumber } from "../../utils";
const BoxTotal = memo(() => {
    const { getTotal } = useContext(cartContext);
    const getVat = () => {
        return getTotal() * 0.08
    }
    return (
        <div className="">
            <div className=" bg-secondary flex items-center gap-2 uppercase text-light p-2">
                <AiFillCaretRight />
                tổng đơn hàng
            </div>
            <div className="p-4 bg-three flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                    <div className=" uppercase">Tạm tính:</div>
                    <div className="font-medium">
                        {formatNumber(
                           getTotal()
                        )}đ
                    </div>
                </div>
                <div className="flex items-baseline justify-between">
                    <div className=" uppercase">Vat:</div>
                    <div className="font-medium">{formatNumber(getVat())}</div>
                </div>
                <div className="flex items-baseline justify-between border-t border-dark py-2 text-[18px]">
                    <div className=" uppercase">thành tiền:</div>
                    <div className="text-secondary font-medium break-words"> {formatNumber(
                           getTotal() + getVat()
                        )}đ</div>
                </div>
            </div>
            <button className="p-2 bg-primary text-light w-full mt-4 hover:bg-dark_primary">
                Đặt mua
            </button>
        </div>
    );
});

BoxTotal.displayName = "BoxTotal";
export default BoxTotal;
