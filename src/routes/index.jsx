import Auth from "../components/validate-page/auth";
import Cart from "../page/cart/cart";
import Contact from "../page/contact/contract";
import Filter from "../page/filter/filter";
import Home from "../page/home/home";
import Login from "../page/login/login";
import NewsDetails from "../page/news-details/news-details";
import News from "../page/news/news";
import ProductDetails from "../page/product-details/product-details";
import Products from "../page/product/products";
import Register from "../page/register/register";


const routes = [
    {
        path: "/login",
        title: 'Đăng nhập',
        element:<Auth><Login/></Auth>
    },
    {
        path: "/register",
        title: 'Đăng ký',
        element:<Auth> <Register/></Auth>
    },
    {
        path: "/",
        exact: true,
        title: 'Trang chủ',
        element: <Home/>
    },
    {
        path: "/products",
        title: 'Sản phẩm',
        element: <Products/>
    },
    {
        path: "/products/:id",
        title: 'Chi tiết sản phẩm',
        element: <ProductDetails/>
    },
    {
        path: "/news",
        title: 'Tin tức',   
        element: <News/>
    },
    {
        path: "/news/:id",
        title: 'Chi tiết tin tức',
        element: <NewsDetails/>
    },
    {
        path: "/cart",
        title: 'Giỏ hàng',
        element: <Cart/>
    },
    {
        path: "/contact",
        title: 'Liên hệ',
        element: <Contact/>
    },
    {
        path: "/filter",
        title: 'Tìm kiếm',
        element: <Filter/>,
    },
];

export default routes;
