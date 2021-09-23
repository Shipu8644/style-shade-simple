import React, { useEffect, useState } from 'react';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="shop-container">
                <div className="products-container">
                    <h1>{products.length}</h1>
                    <div>

                    </div>
                    <div>
                        <h1>hello</h1>
                    </div>
                </div>
                <div className="cart-container">

                </div>
            </div>
        </div>
    );
};

export default Shop;