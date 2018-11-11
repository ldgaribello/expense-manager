import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const DashboardPage = () => <div>This is the dashboard page</div>;
const AddExpensePage = () => <div>This is the add expense page</div>;
const EditExpensePage = () => <div>This is the edit expense page</div>;
const HelpPage = () => <div>This is the help page</div>;

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
