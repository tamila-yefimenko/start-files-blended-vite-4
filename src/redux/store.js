import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todoSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filters/filterslice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const store = configureStore({
  reducer: {
    todos: persistReducer(persistConfig, todosReducer),
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
