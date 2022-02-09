import React from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa"
import { useGlobalContext } from "./context";

const CartItem = ({ id, title, price, img, amount }) => {
    const { removeItem, increaseAmount, decreaseAmount, toggleAmount } = useGlobalContext();
    return <section className="cart-items-section">
        <div className="items-img-container">
            <img src={img} alt={title} />
        </div>
        <div className="items-img-desc">
            <h3>{title}</h3>
            <h4>${price}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
        </div>
        <div className="items-number-toogle">
            <button onClick={() => toggleAmount(id, 'Inc')}><FaSortUp /></button>
            <h5>{amount}</h5>
            <button><FaSortDown onClick={() => toggleAmount(id, 'Dec')} /></button>
        </div>
    </section>
}

export default CartItem;