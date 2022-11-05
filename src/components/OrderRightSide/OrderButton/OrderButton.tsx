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
    <button
      className="orderBtn btn d-flex align-items-center justify-content-between p-2 m-2 btn-outline-secondary flex-wrap"
      onClick={props.onClick}>
      <img className="orderImg rounded" alt="#" src={props.image}/>
      <h6 className="m-3 BurgerName">{props.name}</h6>
      <p className="m-3 BurgerPrice">{props.price} KGS</p>
    </button>
  );
};

export default OrderButton;