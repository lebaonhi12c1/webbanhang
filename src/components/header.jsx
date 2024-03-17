import React, { memo, useContext } from "react";
import { PiSignInLight } from "react-icons/pi";
import {
    AiOutlineUserAdd,
    AiOutlineSearch,
    AiOutlineShoppingCart,
    AiFillStar,
    AiOutlineCar,
    AiOutlineFieldTime,
    AiOutlineLogout,
    AiOutlineUser,
} from "react-icons/ai";

import { GoArrowSwitch } from "react-icons/go";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "../utils/cn";
import { cartContext } from "../context/cart";
import { userContext } from "../context/user";
const Header = memo(() => {
    const { pathname } = useLocation();
    const { cart } = useContext(cartContext);
    const { user, setInfoUser } = useContext(userContext);
    const navigate = useNavigate();
    const isActive = (route) => {
        return pathname.includes(route);
    };

    const handleLogout = () => {
        setInfoUser(null)
    }

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = {};
        for (let pair of formData.entries()) {
            formDataObject[pair[0]] = pair[1];
        }
        
        navigate(`/filter?${new URLSearchParams(formDataObject).toString()}`)
    }
    return (
        <div className="sticky top-0 z-50">
            <div className="bg-primary py-2">
                {!user && (
                    <div className="container_box flex items-center justify-end gap-4">
                        <Link
                            to={"/login"}
                            className="flex items-center text-[12px] gap-2 text-light"
                        >
                            <PiSignInLight />
                            Đăng nhập
                        </Link>
                        <div className="border border-light h-[10px]"></div>
                        <Link
                            to={"/register"}
                            className="flex items-center text-[12px] gap-2 text-light"
                        >
                            <AiOutlineUserAdd />
                            Đăng ký
                        </Link>
                    </div>
                )}
                {user && (
                    <div className="container_box flex items-center justify-end gap-4">
                        <div className="w-fit relative group flex items-center gap-2">
                            <img src="https://atg-prod-scalar.s3.amazonaws.com/studentpower/media/user%20avatar.png" alt="user_avatar" className="w-[20px] h-[20px] border-2 border-light rounded-full" />
                            <span className="text-light hover:underline cursor-pointer">{user.email}</span>
                            <div className="hidden absolute bg-light shadow-lg top-full right-0 w-[200px] group-hover:block p-2 z-[100]">
                                <div className=" absolute border-transparent border-[10px] right-4 border-b-light bottom-full">
                            
                                </div>
                                <div className="flex items-center gap-2 hover:underline cursor-pointer hover:text-primary py-1">
                                    <AiOutlineUser/>
                                    Hồ sơ
                                </div>
                                <div className="flex items-center gap-2 text-secondary hover:underline cursor-pointer py-1"
                                    onClick={handleLogout}
                                >
                                    <AiOutlineLogout/>
                                    Đăng xuất
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div className="py-2 border-b-[4px] border-primary border-solid bg-light">
                <div className="container_box flex items-center gap-4 h-full">
                    <Link href="/" className="w-[200px] h-[100px]">
                        <img
                            src="https://kispershop.com/wp-content/uploads/2023/07/kispershop-hinh-anh-KisperShop_Logo.webp"
                            alt="logo"
                            className="object-contain h-full w-full"
                        />
                    </Link>
                    <div className="flex-1 flex flex-col gap-4 h-full">
                        <div className="flex-1 flex items-stretch gap-4">
                            <form className="flex-1" onSubmit={handleSubmit}>
                                <div className="flex">
                                    <div className="relative w-full">
                                        <input
                                            type="name"
                                            id="name-dropdown"
                                            name="name"
                                            className="block focus-visible:outline-none p-2.5 w-full z-20 text-sm text-light_gray bg-light_gray rounded-r-lg border-l-light_gray border-l-2 border border-light_gray focus:ring-primary focus:border-primary"
                                            placeholder="Tìm kiếm sản phẩm..."
                                            required
                                        />
                                        <button
                                            type="submit"
                                            className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-primary rounded-r-lg border border-primary hover:bg-dark_primary focus:ring-4 focus:outline-none focus:ring-blue-300"
                                        >
                                            <AiOutlineSearch fontSize={24} />
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <span className="bg-secondary text-light text-sm font-medium flex items-center justify-center px-4 rounded dark:bg-secondary dark:text-light">
                                Hotline: 0123456789
                            </span>

                            <Link to={"/cart"}>
                                <button
                                    type="button"
                                    className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-primary rounded-md hover:bg-dark_primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-dark_primary dark:focus:ring-primary"
                                >
                                    <AiOutlineShoppingCart fontSize={18} />
                                    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-secondary border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                                        {cart.length}
                                    </div>
                                </button>
                            </Link>
                        </div>
                        <div className="flex items-center justify-end gap-8 text-light_dark mt-auto">
                            <Link
                                className={cn("hover:text-primary", {
                                    "text-primary": pathname === "/",
                                })}
                                to={"/"}
                            >
                                Trang chủ
                            </Link>
                            <Link
                                className={cn("hover:text-primary", {
                                    "text-primary": isActive("products"),
                                })}
                                to={"/products"}
                            >
                                Sản phẩm
                            </Link>
                            <Link
                                className={cn("hover:text-primary", {
                                    "text-primary": isActive("about"),
                                })}
                                to={"/about"}
                            >
                                Giới thiệu
                            </Link>
                            <Link
                                className={cn("hover:text-primary", {
                                    "text-primary": isActive("news"),
                                })}
                                to={"/news"}
                            >
                                Tin tức
                            </Link>
                            <Link
                                className={cn("hover:text-primary", {
                                    "text-primary": isActive("contact"),
                                })}
                                to={"/contact"}
                            >
                                Liên hệ
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
                <div className="flex items-center gap-2 bg-three justify-center py-2">
                    <AiFillStar />
                    <span>Sản phẩm chính hãng</span>
                </div>
                <div className="flex items-center gap-2 bg-three justify-center py-2">
                    <GoArrowSwitch />
                    <span>Bảo hành dài hạn</span>
                </div>
                <div className="flex items-center gap-2 bg-three justify-center py-2">
                    <AiOutlineCar />
                    <span>Giao hàng toàn quốc</span>
                </div>
                <div className="flex items-center gap-2 bg-three justify-center py-2">
                    <AiOutlineFieldTime />
                    <span>Hỗ trợ 24/7</span>
                </div>
            </div>
        </div>
    );
});
Header.displayName = "Header";
export default Header;
