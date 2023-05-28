import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  //   thunk,
  // sagaMiddleware,
].filter(Boolean);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleWares),
});

// Commented below code as now I am implimenting reduxjs/toolkit

// import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
// // import thunk from "redux-thunk";
// import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import { rootSaga } from "./root-saga";
// import { rootReducer } from "./root-reducer";

// const sagaMiddleware = createSagaMiddleware();

// const middleWares = [
//   process.env.NODE_ENV === "development" && logger,
//   //   thunk,
//   sagaMiddleware,
// ].filter(Boolean);
// const composedEnhancer = compose(applyMiddleware(...middleWares));

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["cart"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// // root reducer
// export const store = createStore(persistedReducer, undefined, composedEnhancer);

// sagaMiddleware.run(rootSaga);

// export const persister = persistStore(store);
