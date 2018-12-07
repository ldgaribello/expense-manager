import { createStore, combineReducers } from "redux";

console.log("This is the expensify reducer...");

// Expenses reducer
const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Filters reducer
const filtersDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "random123",
      description: "January Rent",
      note: "This was the final payment for that address",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // amount or date
    startDate: undefined,
    endDate: undefined
  }
};
