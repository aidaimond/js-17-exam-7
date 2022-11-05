import React from 'react';
import OrderDiv from "./OrderDiv/OrderDiv";

interface Props {
  orders: Order[];
  remove: (name: string) => void;
  totalPrice: number;
  decrease: (name: string) => void;
}

const OrderLeftSide: React.FC<Props> = ({orders, remove, decrease, totalPrice}) => {

  const classNameP = [''];
  const classNameSpan = ['d-none'];

  orders.map(order => {
    if(order.count > 0) {
     classNameP.push('d-none');
     classNameSpan.shift();
     classNameSpan.push('d-block');
    }
    return null;
  });

  return (
    <div className="border m-3 col-6 text-center">
      <h4 className="m-3">
        Order Details
      </h4>
      <p className={classNameP.join(' ')}>Order is empty!</p>
      <p className={classNameP.join(' ')}>Please add some items!</p>
      <div>
        {orders.map((order) => {
          if(order.count > 0) {
            return <OrderDiv
              key={Math.random()}
              name={order.name}
              price={order.price}
              onDelete={() => remove(order.name)}
              amount={order.count}
              onDecrease={() => decrease(order.name)}
            />
          }
          return null;
          }
          ) }
      </div>
      <span className={classNameSpan.join(' ')}>Total price: {totalPrice} KGS</span>
    </div>
  );
};

export default OrderLeftSide;