import React, { memo } from "react";
import { cn } from "../../utils/cn";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import CardProduct from "./product";
const ListProduct = memo(
    ({ heading = "Sản phẩm bán chạy", variant = "primary", data = [] }) => {

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
                <div>
                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={4}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            1024: {
                                slidesPerView: 4
                            },
                            1280: {
                                slidesPerView: 6
                            }
                        }}
                    >
                        {data.map((item,index) => (
                            <SwiperSlide key={index}>
                                <CardProduct data={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        );
    }
);
ListProduct.displayName = "ListProduct";
export default ListProduct;
