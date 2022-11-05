import React from 'react';

interface Props {
  name: string;
  price: number;
  onDelete: React.MouseEventHandler;
  amount: number;
}

const OrderDiv: React.FC<Props> = (props) => {
  return (
    <div className="orderBtn btn d-flex align-items-center">
      <p className="m-3">{props.name}</p>
      <p className="m-3">{props.price}</p>
      <p className="m-3">{props.amount}</p>
      <button className="btn-secondary btn" onClick={props.onDelete}>Delete</button>
    </div>
  );
};


export default OrderDiv;