import { createSlice } from '@reduxjs/toolkit';

const initialState = { //Initialise the state. cartItems will hold all products stored in the cart.
    cartItems : [],
};

const CartSlice = createSlice({ //This will create a slice of the store. 
    name: 'cart',
    initialState,
    reducers: {
        /* We create 5 reducers. Two to handle addition and deletion of new products,
        one to handle removing all products,
        and two to handle changes in quantities of products. */
        addItemToCart(state, action) { //Takes the current state, and the action as args.
            const existingItem = state.cartItems.find(item => item.id === action.payload.id); //Searches for item by comparing IDs.
            if (existingItem) {
                existingItem.quantity++; //If found in cart, increase quantity
            }
            else {
                state.cartItems.push({ ...action.payload, quantity: 1 }); //If not found, add to cart.
            }
        },
        removeItemFromCart(state, action) {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload); //Only keep items that don't match IDs.
        },
        clearCart(state) {
            state.cartItems = []; //Resets to initial state
        },
        increaseItemQuantity(state, action) {
            const itemToIncrease = state.cartItems.find(item => item.id === action.payload); //Find item by ID
            if (itemToIncrease) { //If found, increase quantiity
                itemToIncrease.quantity += 1;
            }
        },
        decreaseItemQuantity(state, action) {
            const itemToDecrease = state.cartItems.find(item => item.id === action.payload); //Find item by ID
            if (itemToDecrease && itemToDecrease.quantity > 1) { //If found, decrease quantity
                itemToDecrease.quantity -= 1;
            }
        },
    }

});
export const {
    addItemToCart,
    removeItemFromCart,
    clearCart,
    increaseItemQuantity,
    decreaseItemQuantity,
} = CartSlice.actions;

export default CartSlice.reducer; //Export the reducer.

