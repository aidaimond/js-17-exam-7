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
    <button className="orderBtn btn d-flex align-items-center" onClick={props.onClick}>
      <img className="orderImg" alt="#" src={props.image}/>
      <h6 className="m-3">{props.name}</h6>
      <p className="m-3">{props.price}</p>
    </button>
  );
};

export default OrderButton;