import { createStore, combineReducers } from "redux";
import uuid from "uuid";

console.log("This is the expensify reducer...");

const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: { id: uuid(), description, note, amount, createdAt }
});

// Expenses reducer
const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return state.concat(action.expense);
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
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({ description: "Rent", amount: 100 }));

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
