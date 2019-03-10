import moment from "moment";

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAt = moment(expense.createdAt);

      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAt)
        : true;
      const endDateMatch = endDate 
        ? endDate.isSameOrAfter(createdAt) 
        : true;
      const textMatch =
        text === undefined ||
        expense.description.toLowerCase().includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};
