import React from "react";

export default (props) => {
  const options = props.options.map((item) => {
    return (
      <option key={item.value} value={`${item.value}`}>
        {item.label}
      </option>
    );
  });

  return <select className="ui dropdown">{options}</select>;
};
