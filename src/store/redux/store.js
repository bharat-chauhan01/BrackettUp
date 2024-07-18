import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../slices/loginSlice';
import profileReducer from '../slices/ProfileSlice';

export const store = configureStore({
  reducer: {
    Login: loginReducer,
    Profile: profileReducer,
  },
});
