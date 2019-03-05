import React from "react";

import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";

class ExpenseForm extends React.Component {
  state = {
    description: "",
    amount: "",
    note: "",
    createdAt: moment(),

    calendarFocused: false,
    error: undefined
  };

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description: description }));
  };

  onAmountChange = e => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  onDateChange = createdAt => {
    this.setState(() => ({ createdAt }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: "Please provide a description and amount"
      }));
    } else {
      this.setState(() => ({
        error: undefined
      }));

      console.log("Submitted");
    }
  };

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          />
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            id="your_unique_id" // PropTypes.string.isRequired,
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <button>Save</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
