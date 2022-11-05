import React from 'react';
import OrderDiv from "./OrderDiv/OrderDiv";

interface Props {
  orders: Order[];
  remove: (name: string) => void;
}

const OrderLeftSide: React.FC<Props> = ({orders, remove}) => {
  return (
    <div className="border m-3 col-6 text-center">
      <h4 className="m-3">
        Order Details
      </h4>
      <p>Order is empty</p>
      <div>
        {orders.map((order) => {
          if(order.count > 0) {
            return <OrderDiv
              key={Math.random()}
              name={order.name}
              price={order.price}
              onDelete={() => remove(order.name)}
              amount={order.count}/>
          }
          }
        ) }
      </div>
    </div>
  );
};

export default OrderLeftSide;