import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartContext from "./context/cart/index.jsx";
import UserContext from "./context/user/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <CartContext>
            <UserContext>
                <App />
            </UserContext>
        </CartContext>
    </React.StrictMode>
);
