import { createStore, combineReducers } from "redux";
import uuid from "uuid";
import { type } from "os";

console.log("This is the expensify reducer...");

// Expenses actions
// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: { id: uuid(), description, note, amount, createdAt }
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// Expenses reducer
const expensesDefaultState = [];
const expensesReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    case "REMOVE_EXPENSE":
      return state.filter(expense => expense.id !== action.id);
    default:
      return state;
  }
};

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: "SORT_BY_DATE"
});

// SET_START_DATE
const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate
});

// SET_END_DATE
const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate
});

// Filters reducer
const filtersDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    case "SORT_BY_AMOUNT":
      return {
        ...state,
        sortBy: "amount"
      };
    case "SORT_BY_DATE":
      return {
        ...state,
        sortBy: "date"
      };
    case "SET_START_DATE":
      return {
        ...state,
        startDate: action.startDate
      };
    case "SET_END_DATE":
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Filter expenses
const filterExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch =
      text === undefined ||
      expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  });
};

// Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const filteredExpenses = filterExpenses(state.expenses, state.filters);
  console.log(filteredExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "Rent", amount: 1000, createdAt: -1000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: "Coffee", amount: 300, createdAt: 3000 })
);
//store.dispatch(removeExpense({ id: expenseOne.expense.id }));
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("Rent"));
store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(-2000));
store.dispatch(setStartDate());
store.dispatch(setEndDate(5000));

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
