import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import authReducer from './auth.slice';
// import storage from 'redux-persist/lib/storage';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

const persistConfig = {
  key: 'auth',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => customizedMiddleware,
});

// export const persistor = persistStore(store);
