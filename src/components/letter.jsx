import React, { memo } from "react";
import { AiFillPhone } from "react-icons/ai";

const Letter = memo(() => {
    return (
        
        <div className="flex flex-col gap-4">
            <div className="container_box grid-cols-1 grid lg:grid-cols-3 gap-4">
                <img src="https://bertmartinez.com/wp-content/uploads/2021/03/word-image-4.png" alt="" className="w-full h-[300px] object-cover" />
                <img src="https://zeevector.com/wp-content/uploads/2021/02/Sale-Tag-PNG-768x445.png" alt="" className="w-full h-[300px] object-cover" />
                <img src="https://cdn1.vectorstock.com/i/1000x1000/51/10/special-offer-and-sale-in-all-products-promotion-vector-22965110.jpg" alt="" className="w-full h-[300px] object-cover" />
            </div>
            <div className="bg-primary">
                <div className="container_box flex items-center gap-4 justify-between flex-wrap">
                    <div className=" uppercase text-light">
                        đăng ký nhận tin hoặc tư vẫn miễn phí
                    </div>
                    <form className="flex-1">
                        <div className="flex">
                            <div className="relative w-full">
                                <input
                                    type="search"
                                    id="search-dropdown"
                                    className="block focus-visible:outline-none p-2.5 w-full z-20 text-sm text-light_gray bg-light_gray rounded-r-lg border-l-light_gray border-l-2 border border-light_gray focus:ring-primary focus:border-primary dark:bg-light_gray dark:border-l-light_gray  dark:border-light_gray dark:placeholder-light_gray dark:text-white dark:focus:border-primary"
                                    placeholder="Email của bạn..."
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-dark_primary border border-dark_primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-primary dark:focus:ring-dark_primary"
                                >
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </form>
    
                    <div className="flex items-center text-light gap-1">
                        <AiFillPhone />
                        03456345675
                    </div>
                </div>
            </div>
        </div>
    );
});
Letter.displayName = "Letter";
export default Letter;
