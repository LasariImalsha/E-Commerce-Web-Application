import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [], 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.users.push(action.payload);
    },
    signIn: (state, action) => {
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
