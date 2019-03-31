import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("Should set remove expense action object", () => {
  const action = removeExpense({ id: "abcdef" });
  expect(action).toEqual({
      type : "REMOVE_EXPENSE",
      id: "abcdef"
  })
});
