import React, {useState} from 'react';
import './App.css';
import BurgerImg from '../../assets/hamburger.png';
import PizzaImg from '../../assets/pizza.png';
import HotDogImg from '../../assets/hotdog.png';
import FriesImg from '../../assets/fries.png';
import CoffeeImg from '../../assets/Coffee.png';
import TeaImg from '../../assets/Tea.png';
import ColaImg from '../../assets/cola.png';
import MilkshakeImg from '../../assets/milkshake.png';
import OrderRightSide from "../../components/OrderRightSide/OrderRightSide";
import OrderLeftSide from "../../components/OrderLeftSide/OrderLeftSide";

function App() {

  const [orders, setOrders] = useState<Order[]>([
    {name: 'Hamburger', price: 90, image: BurgerImg, count: 0},
    {name: 'Pizza', price: 100, image: PizzaImg, count: 0},
    {name: 'Hot-dog', price: 80, image: HotDogImg, count: 0},
    {name: 'Fries', price: 50, image: FriesImg, count: 0},
    {name: 'Coffee', price: 70, image: CoffeeImg, count: 0},
    {name: 'Tea', price: 20, image: TeaImg, count: 0},
    {name: 'Cola', price: 40, image: ColaImg, count: 0},
    {name: 'Milkshake', price: 85, image: MilkshakeImg, count: 0},
  ]);

  const addOrder = (image: string) => {
    setOrders(prev => prev.map(order => {
        if (order.image === image) {
          return {
            ...order,
            count: order.count + 1
          }
        }
        return order;
      })
    )
  };

  const remove = (name: string) => {
    setOrders(prev => prev.map(order => {
        if (order.name === name) {
          return {
            ...order,
            count: order.count - 1
          }
        }
        return order;
      })
    )
  }

  return (
    <div className="container d-flex">
      <OrderLeftSide orders={orders} remove={remove}/>
      <OrderRightSide orders={orders} addOrder={addOrder}/>
    </div>
  );
}

export default App;
