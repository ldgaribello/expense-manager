import { createStore, combineReducers } from "redux";

console.log("This is the expensify reducer...");

// Expenses Reducer

const expensesDefaultState = [];

const expensesReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

// Store creation

const store = createStore(expensesReducer);

console.log(store);

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
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  }
};
