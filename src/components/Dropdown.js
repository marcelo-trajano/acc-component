import React, { useState, useEffect, useRef } from "react";

export default (props) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      console.log(event.target);
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    });
  }, []);

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
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{props.label}</label>
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
