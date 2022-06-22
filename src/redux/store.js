import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  // persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { myContactsReducer } from './contacts/slice';
import { pokemonApi } from './pokemon';
import { contactsApi } from './contacts';

// const myMiddleware = store => next => action => {
//   console.log('my middleware123', action);
//   next(action);
// };

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   myMiddleware,
// ];

export const store = configureStore({
  reducer: {
    contacts: myContactsReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    contactsApi.middleware,
  ],
  // middleware(getDefaultMiddleware) {
  //   return getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   });
  // },
  // middleware,
});

// export const persistor = persistStore(store);
