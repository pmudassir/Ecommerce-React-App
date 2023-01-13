import { createSlice } from '@reduxjs/toolkit';

// redux is used to manage state, and for cart there will be products quantity and price.
// reducers are actions, when a product is added to the cart products quantity and price 
// should be updated. payload refers to the product thats being added to the cart.

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0
    },
    reducers: {
        addProduct: (state, action) =>{
            state.quantity += 1;    //this is the quantity of products in the cart
            state.products.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;   //this quantity is that of products user manually adds using the button
        }
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;