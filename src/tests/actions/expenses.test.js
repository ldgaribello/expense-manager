import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should setup remove expense action object", () => {
  const action = removeExpense({ id: "abcdef" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "abcdef"
  });
});

test("Should setup edit expense action object", () => {
  const action = editExpense("abcdef", { description: "Edited description" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abcdef",
    updates: {
      description: "Edited description"
    }
  });
});

test("Should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    note: "Last month rent",
    amount: 109000,
    createdAt: 1000
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test("Should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  });
});
