import React, { memo } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = memo(() => {
    const navigate = useNavigate();
    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = {};
        for (let pair of formData.entries()) {
            formDataObject[pair[0]] = pair[1];
        }
        navigate('/login')
    }
    
    return (
        <section className="my-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Đăng ký tài khoản
                        </h1>
                        <form className="space-y-4 md:space-y-6"
                            onSubmit={onSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="border p-2 rounded-lg w-full focus-visible:outline-primary bg-three"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Mật khẩu
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="borer p-2 rounded-lg w-full focus-visible:outline-primary bg-three"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="pre_password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Nhập lại mật khẩu
                                </label>
                                <input
                                    type="password"
                                    name="pre_password"
                                    id="pre_password"
                                    placeholder="••••••••"
                                    className="borer p-2 rounded-lg w-full focus-visible:outline-primary bg-three"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-primary w-full py-2 rounded-lg text-light hover:bg-dark_primary"
                            >
                                Đăng ký
                            </button>
                            <p className="text-sm font-light text-light_dark">
                                Bạn đã có tài khoản?{" "}
                                <Link
                                    to={'/login'}
                                    className="font-medium text-primary hover:underline"
                                >
                                    Đăng nhập
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
});
Register.displayName = "Register";
export default Register;
