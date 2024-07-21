import { createSlice } from '@reduxjs/toolkit';
import { setItem } from '../LocalStorage';

const initialState = {
  authToken: null,
};

const storeData = async input => {
  await setItem('auth', input);
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.authToken = action.payload.res.authToken;
      storeData(action.payload.res);
    },
    setLogout: (state, action) => {
      state.authToken = null;
      storeData(null);
    },
  },
});
export const setLogin = loginSlice.actions.setLogin;
export const setLogout = loginSlice.actions.setLogout;
export default loginSlice.reducer;
