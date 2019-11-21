import React from "react";
import ReactDOM from "react-dom";

import { createStore } from "redux";
import reducer from "reducers";

import { Provider } from "react-redux";

import "index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from "App";
import * as serviceWorker from "serviceWorker";

import { IStore } from "types";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}; 

export const saveState = (state: IStore) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

const initialState: IStore = loadState() || {
    activeNote: 0,
    notes: [{title: "example", comments: [{color: "#e66465", content: "This is example"}]}],
};
const store = createStore(reducer, initialState);
store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

