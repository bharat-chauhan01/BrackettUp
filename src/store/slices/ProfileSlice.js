import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  credits: 0,
  reservations: 0,
};

const profileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    setProfile: (state, action) => {
      state.name = action.payload.name;
      state.credits = action.payload.credits;
      state.reservations = action.payload.reservations;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;