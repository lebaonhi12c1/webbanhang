import React, { memo, useContext } from "react";
import { userContext } from "../../context/user";
import { useNavigate } from "react-router-dom";

const Login = memo(() => {
    const navigate = useNavigate();
    const {setInfoUser} = useContext(userContext)

    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formDataObject = {};
        for (let pair of formData.entries()) {
            formDataObject[pair[0]] = pair[1];
        }
        setInfoUser(formDataObject)
        navigate('/')
    }
    
    return (
        <section className="my-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                <div className="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Đăng nhập tài khoản
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
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                            required=""
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className="text-gray-500 dark:text-gray-300"
                                        >
                                            Lưu đăng nhập
                                        </label>
                                    </div>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    Quên mật khẩu?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="bg-primary w-full py-2 rounded-lg text-light hover:bg-dark_primary"
                            >
                                Đăng nhập
                            </button>
                            <p className="text-sm font-light text-light_dark">
                                Bạn chưa có tài khoản?{" "}
                                <a
                                    href="#"
                                    className="font-medium text-primary hover:underline"
                                >
                                    Đăng ký
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
});
Login.displayName = "Login";
export default Login;
