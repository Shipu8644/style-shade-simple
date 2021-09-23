import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    const total = cart.reduce((a, b) => (a + b.price), 0);

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Total Price:{total.toFixed(2)}</p>
        </div>
    );
};

export default Cart;