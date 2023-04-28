import "../styles/globals.css";
import Head from "next/head";

import { Provider } from "react-redux";
import users from "../reducers/users";
import counter from "../reducers/counter";

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({ users, counter });

const persistConfig = { key: "hackatweet", storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <>
          <Head>
            <title>BETTER TWITTER</title>
          </Head>
          <Component {...pageProps} />
        </>
      </PersistGate>
    </Provider>
  );
}

export default App;
