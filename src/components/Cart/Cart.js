import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    const total = cart.reduce((a, b) => (a + b.price), 0);
    const shipping = total > 0 ? 15 : 0;
    const tax = total * (15 / 100);
    const grandTotal = total + shipping + tax;

    return (
        <div >

            <div className='cart'>
                <table>
                    <tbody>
                        <div >
                            <th><h3 >Order Summary</h3></th>
                            <tr><th><h5>Items Ordered: {cart.length}</h5></th></tr>
                        </div>

                        <tr>
                            <td>Total Price</td>
                            <td>: {total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping</td>
                            <td>: {shipping.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Tax</td>
                            <td>: {tax.toFixed(2)}</td>
                        </tr>
                        <tr><td><hr style={{ width: '150%' }} /></td></tr>
                        <tr>
                            <td>Whole Price</td>
                            <td>: {grandTotal.toFixed(2)}</td>
                        </tr>
                    </tbody>


                </table>
            </div>


        </div >
    );
};

export default Cart;