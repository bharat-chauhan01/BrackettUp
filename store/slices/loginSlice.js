import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    user: null,
    isLoading: false,
    error: null
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        setLogin: (state, action) =>{
            console.log("here is my action"+action.payload.user)
            state.user = action.payload.user;
            state.isLoading = action.payload.isLoading;
            state.error = action.payload.error
        },
        setLogout: (state, action) =>{
            state.user = null,
            state.isLoading = action.payload.isLoading;
            state.error = null  
        }
    }
});
export const setLogin = loginSlice.actions.setLogin;
export const setLogout = loginSlice.actions.setLogout;
export default loginSlice.reducer;
