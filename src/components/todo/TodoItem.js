import React from "react";
import PropTypes from "prop-types";

export const TodoItem = props => {
  return (
    <div>
      <li key={props.id}>
        <input type="checkbox" defaultChecked={props.isComplete} /> {props.name}
      </li>
    </div>
  );
};

TodoItem.propTypes = {
  name: PropTypes.string,
  isComplete: PropTypes.bool,
  id: PropTypes.number
};
