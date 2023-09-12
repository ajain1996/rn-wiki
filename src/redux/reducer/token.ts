import { createSlice } from '@reduxjs/toolkit';

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        token: {},
    },
    reducers: {
        setToken(state, action) {
            const ctoken = action.payload;
            return { ...state, token: ctoken };
        },
        removeToken(state, action) {
            return { ...state, token: {} };
        },
    },
});



export const { setToken, removeToken } = tokenSlice.actions;

export default tokenSlice.reducer;
