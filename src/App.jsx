import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const MainLayout = lazy(() => import("./layout/main"));
const Home = lazy(() => import("./page/home/home"));
const Products = lazy(() => import("./page/product/products"));
const ProductDetails = lazy(() =>
    import("./page/product-details/product-details")
);
const News = lazy(() => import("./page/news/news"));
const NewsDetails = lazy(() => import("./page/news-details/news-details"));
const Cart = lazy(() => import("./page/cart/cart"));
const Login = lazy(() => import("./page/login/login"));
const Register = lazy(() => import("./page/register/register"));
const Auth = lazy(() => import("./components/validate-page/auth"));
const Contact = lazy(() => import("./page/contact/contract"));
const Filter = lazy(() => import("./page/filter/filter"));
const NotFound = lazy(() => import("./page/notfound/notfound"));

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense  fallback={<div>Loading...</div>}>
                <MainLayout />
            </Suspense >
        ),
        children: [
            {
                path: "/login",
                element: (
                    <Auth>
                        <Login />
                    </Auth>
                ),
            },
            {
                path: "/register",
                element: (
                    <Auth>
                        {" "}
                        <Register />
                    </Auth>
                ),
            },
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/products/:id",
                element: <ProductDetails />,
            },
            {
                path: "/news",
                element: <News />,
            },
            {
                path: "/news/:id",
                element: <NewsDetails />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/filter",
                element: <Filter />,
            },
            {
                path: "/*",
                element: <NotFound />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
