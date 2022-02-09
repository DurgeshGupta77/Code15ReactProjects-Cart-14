import React from "react";
import { FaShoppingBag } from 'react-icons/fa';

import { useGlobalContext } from './context';

const Navbar = () => {
    const { amount } = useGlobalContext();

    return <nav className="navigation-bar">
        <div className="navigation-title">
            <h3>UseReducer Cart</h3>
        </div>
        <div className="nav-cart-icon-container">
            <FaShoppingBag className="nav-cart-icon" />
            <p className="nav-total-cart-items">{amount}</p>
        </div>
    </nav>
}

export default Navbar;