import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const DashboardPage = () => <div>This is the dashboard page</div>;
const AddExpensePage = () => <div>This is the add expense page</div>;
const EditExpensePage = () => <div>This is the edit expense page</div>;
const HelpPage = () => <div>This is the help page</div>;
const NotFoundPage = () => <div>404!</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
