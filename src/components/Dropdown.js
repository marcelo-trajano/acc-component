import React, { useState } from "react";

export default (props) => {
  const [open, setOpen] = useState(false);

  const options = props.options.map((item) => {
    if (item.value === props.selected.value) {
      return null;
    }

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
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{props.selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {options}
          </div>
        </div>
      </div>
    </div>
  );
};
