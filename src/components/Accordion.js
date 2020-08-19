import React, { useState } from "react";

const Accordion = (props) => {
  const [indexActive, setindexActive] = useState(null);

  const onClickItem = (index) => {
    setindexActive(index);
  };

  const renderedItems = props.items.map((item, index) => {
    let activeStyle = indexActive === index ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${activeStyle}`}
          onClick={() => {
            onClickItem(index);
          }}
        >
          <i className="dropdown icon"> </i>
          {item.title}
        </div>
        <div className={`content ${activeStyle}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
