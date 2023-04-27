
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: {},
};

export const usersSlice = createSlice({
 name: 'users',

  initialState,
 reducers: {
   addUserToStore: (state, action) => {
    state.value=action.payload
    console.log('user added to store')

   },
   removeUserFromStore: (state, action) => {
    state.value={};
    console.log('store emptied')

 }

   }


});

export const { addUserToStore, removeUserFromStore } = usersSlice.actions;
export default usersSlice.reducer;