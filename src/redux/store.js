import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from './cartRedux';
import userReducer from './userRedux';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from "redux-persist/lib/storage";

//using persistor so that after login even if the user tries to back to the login page it would still re-render back 
//to the home page as the login credentials are already saved locally using persistor same for the cart, cart data's will be saved locally

const persistConfig = {
    key: "root",
    version: 1,
    storage,
}

const rootReducer = combineReducers({user: userReducer, cart: cartReducer})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export let persistor = persistStore(store)