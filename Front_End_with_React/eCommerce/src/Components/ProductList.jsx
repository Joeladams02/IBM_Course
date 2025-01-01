import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { addItemToCart } from './CartSlice.jsx';
import './ProductList.css'; 


const ProductList = () => {

  const products = [
    { id: 1, name: 'Product A', price: 60 },
    { id: 2, name: 'Product B', price: 75 },
    { id: 3, name: 'Product C', price: 30 },
  ];

  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems); //Retrieves items in the cart, to ensure items aren't added twice.
  const cartItemsIDs = cartItems.map(item => item.id); //Retrieves IDs of items in cart.
  const handleAddToCart = (product) => {
    dispatch(addItemToCart(product)); //Added to cart.
  }

  return (
    <div className="product-list">
      <h2 className="product-list-title">Products</h2>
      <ul className="product-list-items">
        {products.map((product) => ( //Map through products and render name with price and button to add to cart.
          <li key={product.id} className="product-list-item">
            <span>{product.name} - ${product.price}</span>
            <button //Check if product has been 'disabled' i.e. already in cart. If it is then disable the button.
            className = {`add-to-cart-btn ${cartItemsIDs.includes(product.id) ? '' : 'disabled'}`}
            onClick = {() => handleAddToCart(product)}
            disabled = {cartItemsIDs.includes(product.id)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
