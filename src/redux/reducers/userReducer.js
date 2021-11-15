import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        editUser: (state, action) => {
            state.user = { ...state.user, ...action.payload };
        },
    },
});

export const { editUser } = userSlice.actions;

export default userSlice.reducer;
