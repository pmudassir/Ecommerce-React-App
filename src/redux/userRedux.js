import { createSlice } from '@reduxjs/toolkit';

// redux is used to manage state, and for user initial state will be null and there is nothing to fetch and no err. 
// Once login is started there is data's to be fetched after login success there is nothing to be fetched and the data's
// will be set as current user but if its login failure there will be err and nothing to be fetched

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false,
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
});

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions;
export default userSlice.reducer;