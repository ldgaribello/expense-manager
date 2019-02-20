import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(
  addExpense({ description: "Rent", amount: 1000, createdAt: -1000 })
);
store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: 5000 })
);
store.dispatch(
  addExpense({ description: "Diner", amount: 300, createdAt: 3000 })
);
store.dispatch(
  addExpense({ description: "Breakfast", amount: 200, createdAt: 1000 })
);

console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
