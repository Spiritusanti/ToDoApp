import { Fragment } from "react";

const Card = (props) => {
  return (
    <Fragment>
      <span onClick={props.clickHandler}>X</span>
      <div>{props.children}</div>
    </Fragment>
  );
};

export default Card;
