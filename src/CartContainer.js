import React from "react";
import CartItem from './CartItem';
import { useGlobalContext } from "./context";

const CartContainer = () => {
    const { cart, total, clearCart } = useGlobalContext();
    if (cart.length === 0) {
        return <section className="complete-cart-container">
            <div className="complete-cart-title">
                <h2>Your Bag</h2>
                <p>is currently empty</p>
            </div>
        </section>
    }

    return <section className="complete-cart-container">
        <div className="complete-cart-title">
            <h2>Your Bag</h2>
            <p>Total: {cart.length} items</p>
        </div>
        <div className="complete-cart-items">
            {
                cart.map((carts) => {
                    return <CartItem key={carts.id} {...carts} />
                })
            }
        </div>
        <div className="complete-cart-total">
            <hr />
            <h4>Total <span>${total}</span></h4>
        </div>
        <div className="complete-cart-clear-btn" onClick={clearCart}>
            <button>Clear Cart</button>
        </div>
    </section>
}

export default CartContainer;