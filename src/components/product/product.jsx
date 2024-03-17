import React, { memo } from "react";
import { convertSlug, formatNumber } from "../../utils";
import { Link } from "react-router-dom";
const CardProduct = memo(({ data = {} }) => {
    return (
        <div
            className="hover:shadow-md hover:shadow-primary hover:rounded duration-200"
        >
            <div className="flex flex-col items-center gap-1 border pb-4 relative h-full">
                <img
                    src={data.image}
                    alt="product_image"
                    className="object-contain w-full h-[200px]"
                />
                <div className="flex flex-col items-center px-4">
                    <div className="text-dark font-medium line-clamp-2">{data.name}</div>
                    <div className="flex flex-col items-center">
                        <div className="text-secondary font-bold">
                            {data.isSale
                                ? formatNumber(data.sale)
                                : formatNumber(data.price)}{" "}
                            đ
                        </div>
                        {data.isSale && (
                            <div className="text-light_dark line-through">
                                {formatNumber(data.price)} đ
                            </div>
                        )}
                    </div>
                    <Link
                        to={`/products/${convertSlug(data.name)}-${data.id}.html`}
                        className="bg-primary hover:bg-dark_primary text-light px-2 rounded block whitespace-nowrap"
                    >
                        <div>Xem chi tiết</div>
                    </Link>
                </div>
                {data.isSale && (
                    <div className="absolute top-2 opacity-90 -left-2 text-[12px]">
                        <div className="bg-secondary text-light px-2 rounded-e-md">
                            Giảm giá
                        </div>
                        <div className="border-4 border-dark_secondary border-l-transparent border-b-transparent w-[10%]"></div>
                    </div>
                )}
            </div>
        </div>
    );
});

CardProduct.displayName = "CardProduct";

export default CardProduct;
