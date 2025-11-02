import {configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import authSlice from "./authSlice";
import exchangeReducer from "./exchangeSlice";


const presistConfig = {
    key : 'user',
    storage,

}

const persistedReducer = persistReducer(presistConfig , authSlice)



export const store = configureStore({
  reducer: { 
    auth: persistedReducer,
    exchange: exchangeReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const presistor = persistStore(store)