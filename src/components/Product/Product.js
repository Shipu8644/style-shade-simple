import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    // console.log(props);
    const { category, price, image, title } = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='product'>
            <div >
                <img className='product-image' src={image} alt="" />
            </div>
            <div>
                <h3 className='title'>{title}</h3>
                <p>Price:{price}</p>
                <p>{category}</p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular' > {element} add to cart</button>

            </div>

        </div>
    );
};

export default Product;