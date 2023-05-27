import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);
const composedEnhancer = compose(applyMiddleware(...middleWares));

const persistConfig = {
  key: "root",
  storage,
  blackList: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// root reducer
export const store = createStore(persistedReducer, undefined, composedEnhancer);

export const persister = persistStore(store);
