import React from 'react';
import './OrderButton.css';

interface Props {
  onClick: React.MouseEventHandler;
  image: string;
  name: string;
  price: number;
}

const OrderButton: React.FC<Props> = (props) => {
  return (
    <button className="orderBtn btn" onClick={props.onClick}>
      <img className="orderImg" alt="#" src={props.image}/>
      <h6>{props.name}</h6>
      <p>{props.price}</p>
    </button>
  );
};

export default OrderButton;