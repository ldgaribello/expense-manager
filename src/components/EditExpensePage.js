import React from "react";

const EditExpensePage = props => {
  return (
    <div>
      <p>Editing the expense with id: {props.match.params.id}</p>
    </div>
  );
};
export default EditExpensePage;
