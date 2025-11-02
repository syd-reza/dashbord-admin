import { createSlice } from "@reduxjs/toolkit";

export const fixedAdmin = { email: "reza@gmail.com", password: "12345678", name: "admin" }

interface User {
    email: string;
    password: string;
    name: string;
  }
  
  interface AuthState {
    user: User | null;
    error: string | null;
    isLogin: boolean;
  }

const initialState:AuthState = {
    user: null,
    error: null,
    isLogin: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action) => {
            state.user = action.payload;
            state.error = null;
            state.isLogin = true;
        },
        registerfailed: (state, action) => {
            state.isLogin = false;
            state.error = action.payload
        },
        loginAdmin: (state, action) => {
            const { email, password } = action.payload;
            if (email === fixedAdmin.email && password === fixedAdmin.password) {
                state.user = fixedAdmin;
                state.error = null;
                state.isLogin = true;
            } else {
                state.isLogin = false;
                state.error = "ایمیل یا پسورد اشتباه است";
            }
        },
        logout: (state) => {
            state.user = null;
            state.isLogin = false;
        },

    }
})

export const {register,registerfailed,loginAdmin,logout} = authSlice.actions;

export default authSlice.reducer;