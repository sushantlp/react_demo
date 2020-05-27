import React from "react";
import { Message } from "semantic-ui-react";

const InvalidError = props => {
  return (
    <Message negative>
      <Message.Header>Invalid Email</Message.Header>
      <p>{props.negativeText}</p>
    </Message>
  );
};

export default InvalidError;
