import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : 'cart' , 
    initialState : {
        items:[] 
    } , 
    reducers : { /**we write reducers adn actions here  */
        addItem:(state , action)=>{
            // mutating/modifying the state 
            state.items.push(action.payload);
        } , 
        removeItem:(state,action)=>{
            state.items.pop();
        } , 
        clearCart : (state, action )=>{
            state.items.length= 0 ; // clears the item but why ? 
        }
    }
}); 

export const {addItem , removeItem , clearCart}= cartSlice.actions;
export default cartSlice.reducer;