import React from "react";

import ExpenseList from "./ExpenseList";
import Filters from "./Filters";

const DashboardPage = () => (
  <div>
    <Filters />
    <ExpenseList />
  </div>
);

export default DashboardPage;
