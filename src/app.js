import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

import "normalize.css/normalize.css";
import "./styles/styles.scss";

const DashboardPage = () => <div>This is the dashboard page</div>;
const AddExpensePage = () => <div>This is the add expense page</div>;
const EditExpensePage = () => <div>This is the edit expense page</div>;
const HelpPage = () => <div>This is the help page</div>;

const NotFoundPage = () => (
  <div>
    404! <Link to="/">Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expense Manager</h1>
    <NavLink activeClassName="is-active" to="/" exact={true}>
      Dashboard
    </NavLink>
    <NavLink activeClassName="is-active" to="/create">
      Add expense
    </NavLink>
    <NavLink activeClassName="is-active" to="/edit">
      Edit expense
    </NavLink>
    <NavLink activeClassName="is-active" to="/help">
      Help
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
