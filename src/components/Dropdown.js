import React from "react";

export default (props) => {
  const options = props.options.map((item) => {
    return (
      <div
        key={item.value}
        onClick={() => {
          props.onSelectChange(item);
        }}
        className="item"
      >
        {item.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.label}</div>
          <div className="menu visible transition">{options}</div>
        </div>
      </div>
    </div>
  );
};
