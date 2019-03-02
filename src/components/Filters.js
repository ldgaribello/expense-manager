import React from "react";
import { connect } from "react-redux";

import { setTextFilter } from "../actions/filters";
import { sortByAmount } from "../actions/filters";
import { sortByDate } from "../actions/filters";

const Filters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => props.dispatch(setTextFilter(e.target.value))}
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        switch (e.target.value) {
          case "date":
            props.dispatch(sortByDate());
            break;
          case "amount":
            props.dispatch(sortByAmount());
            break;
        }
      }}
    >
      <option value="amount">Amount</option>
      <option value="date">Date</option>
    </select>
  </div>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(Filters);
