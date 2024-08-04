import { configureStore } from '@reduxjs/toolkit';

import loginReducer from '../slices/loginSlice';
import profileReducer from '../slices/ProfileSlice';
import locationReducer from '../slices/LocationSlice';

export const store = configureStore({
  reducer: {
    Login: loginReducer,
    Profile: profileReducer,
    Location: locationReducer,
  },
});
