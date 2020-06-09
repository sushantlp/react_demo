import React from "react";
import { Card } from "semantic-ui-react";
import { assignmentExpression } from "@babel/types";

const CardExampleColored = () => (
  <Card.Group itemsPerRow={4}>
    <Card color="red" images={"../images/as.jpeg"} />
    <Card color="orange" image={"./Card/images/as.jpeg"} />
    <Card color="yellow" image={"./Card/images/download.jpeg"} />
    <Card color="olive" image={"./Card/images/insidious.jpg"} />
    <Card color="green" image={"./Card/images/Kites.jpg"} />
    <Card color="teal" image={"./Card/images/nemo.jpg"} />
    <Card color="blue" image={"./Card/images/unnamed(1).jpg"} />
    <Card color="violet" image={"./Card/images/unnamed.jpg"} />
    <Card color="purple" image={"./Card/images/imagesss.jpeg"} />
    <Card color="pink" image={"./Card/images/nemo.jpg"} />
    <Card color="brown" image={"./Card/images/wN.jpg"} />
    <Card color="grey" image={"./Card/images/MV.jpg"} />
  </Card.Group>
);

export default CardExampleColored;
