import React from 'react'
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from 'reactstrap';

const ProductCard = (props) => {
  const {name, stocked, category, description, price} = props.product;
  return (
    <div>
      <Card>
        <CardHeader>
          <b>{name}</b>
          { stocked ? <p>Stock Available.</p> : <p>Out Of Stock.</p>}
        </CardHeader>
        <CardBody>
          <CardText>Category: {category}</CardText>
          <CardText>Description: {description}</CardText>
          <Button>Button</Button>
        </CardBody>
        <CardFooter>
          Price: ${price}
        </CardFooter>
      </Card>
      <br/>
    </div>
);
}

export default ProductCard;