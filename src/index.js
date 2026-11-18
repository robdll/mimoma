import React from "react";
import { createRoot } from "react-dom/client";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";

import thunkMiddleware from "redux-thunk";

import libraryReducer from "./store/reducers/movie-library-reducer";

import App from "./store/containers/app-container";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  movieLibrary: libraryReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
