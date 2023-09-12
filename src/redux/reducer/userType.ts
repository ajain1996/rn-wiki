import { createSlice } from '@reduxjs/toolkit';

export const userTypeSlice = createSlice({
    name: 'userType',
    initialState: {
        userType: "user",
    },
    reducers: {
        setUserType(state, action) {
            const userType = action.payload;
            return { ...state, userType: userType };
        },
        removeUserType(state, action) {
            return { ...state, userType: "user" };
        },
    },
});



export const { setUserType, removeUserType } = userTypeSlice.actions;

export default userTypeSlice.reducer;
