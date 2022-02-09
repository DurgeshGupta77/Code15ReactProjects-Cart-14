const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }
    if (action.type === 'REMOVE_ITEM') {
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
    }

    if (action.type === 'INCREASE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem;
        });
        return { ...state, cart: tempCart }
    }

    if (action.type === 'DECREASE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem;
        }).filter((cartItem) => cartItem.amount !== 0);
        return { ...state, cart: tempCart }
    }

    //To follow the dry principle while increasing or decreasing amount. Not necessary but just code refactoring
    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                if (action.payload.type === 'Inc') {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                if (action.payload.type === 'Dec') {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
            }
            return cartItem;
        }).filter((cartItem) => cartItem.amount !== 0);
        return { ...state, cart: tempCart }
    }

    if (action.type === 'GET_TOTALS') {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
        }, {
            total: 0,
            amount: 0
        })
        total = parseFloat(total.toFixed(3))
        return { ...state, total, amount }
    }

    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }

    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart: action.payload, loading: false }
    }

    throw new Error('No Action Type Defined')
}

export default reducer;