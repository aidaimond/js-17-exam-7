import React from 'react';

interface Props {
  name: string;
  price: number;
  onDelete: React.MouseEventHandler;
  amount: number;
  onDecrease: React.MouseEventHandler;
}

const OrderDiv: React.FC<Props> = (props) => {
  return (
    <div className="d-flex align-items-center justify-content-between p-2 m-2 border-bottom">
      <p className="m-3">{props.name}</p>
      <p className="m-3">{props.price} KGS</p>
      <button className="m-3 btn btn-outline-secondary" onClick={props.onDecrease}>× {props.amount}</button>
      <button className="btn-secondary btn" onClick={props.onDelete}>Delete</button>
    </div>
  );
};

export default OrderDiv;