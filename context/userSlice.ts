import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userId: number;
  username: string;
  fullName : string;
}

const initialState: UserState = {
  userId : 0,
  username: '',
  fullName : '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.userId = action.payload.userId
      state.username = action.payload.username;
      state.fullName = action.payload.fullName;
    },
    clearUser: (state) => {
      state.userId = 0;
      state.username = '';
      state.fullName = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
