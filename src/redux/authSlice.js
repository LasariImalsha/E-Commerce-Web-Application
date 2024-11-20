import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [], // Store multiple users for sign-up purposes
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
      // Save new user data in Redux store
      state.users.push(action.payload);
    },
    signIn: (state, action) => {
      // Check if email and password match any user
      const user = state.users.find(
        (user) => user.email === action.payload.email && user.password === action.payload.password
      );
      if (user) {
        state.isAuthenticated = true;
        state.user = user;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { signUp, signIn, logout } = authSlice.actions;
export default authSlice.reducer;
