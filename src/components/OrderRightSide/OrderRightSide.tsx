import React from 'react';
import OrderButton from "./OrderButton/OrderButton";

interface Props {
  orders: Order[];
  addOrder: (image: string) => void;
}

const OrderRightSide: React.FC<Props> = ({orders, addOrder}) => {
  return (
    <div className="border m-3 col-6 text-center">
      <h4 className="m-3">
        Add Items
      </h4>
      {orders.map((order) => (
        <OrderButton
          key={Math.random()}
          onClick={() => addOrder(order.image)}
          image={order.image}
          name={order.name}
          price={order.price}/>
      ))}
    </div>
  );
};

export default OrderRightSide;