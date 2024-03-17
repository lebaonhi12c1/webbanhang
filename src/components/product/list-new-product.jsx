import React, { memo } from "react";
import { cn } from "../../utils/cn";
import CardProduct from "./product";
const ListNewProduct = memo(
    ({ heading = "Sản phẩm mới nhất", variant = "primary", data = [] }) => {

        return (
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-2 border-b">
                    <div className="flex items-center">
                        <div
                            className={cn(
                                "p-2 rounded uppercase text-light",
                                {"bg-primary": variant === "primary"},
                                {"bg-secondary": variant === "secondary"}
                            )}
                        >
                            {heading}
                        </div>
                        <div
                            className={cn(
                                "border-[10px] border-transparent",
                                {"border-l-primary": variant === "primary"},
                                {"border-l-secondary": variant === "secondary"}
                            )}
                        ></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-6">
                    <div className="col-span-2">
                        <img src="https://socialgrowthlabs.b-cdn.net/wp-content/uploads/2021/05/04-new-products.png" alt="new-banner" />
                    </div>
                    {data.map((item) => (
                        <CardProduct key={item.id} data={item} />
                    ))}
                </div>
            </div>
        );
    }
);
ListNewProduct.displayName = "ListNewProduct";
export default ListNewProduct;
