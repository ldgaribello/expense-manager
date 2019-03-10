import React from "react";
import { connect } from "react-redux";
import { DateRangePicker } from "react-dates";

import { setTextFilter } from "../actions/filters";
import { sortByAmount } from "../actions/filters";
import { sortByDate } from "../actions/filters";
import { setStartDate } from "../actions/filters";
import { setEndDate } from "../actions/filters";

class Filters extends React.Component {
  state = {
    calendarFocused: null,
    error: undefined
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => this.props.dispatch(setTextFilter(e.target.value))}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            switch (e.target.value) {
              case "date":
                this.props.dispatch(sortByDate());
                break;
              case "amount":
                this.props.dispatch(sortByAmount());
                break;
            }
          }}
        >
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="start_date_id"
          endDate={this.props.filters.endDate}
          endDateId="end_date_id"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(Filters);
