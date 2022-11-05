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


function App() {

  const [orders, setOrders] = useState([
    {name: 'Hamburger', price: 90, image: BurgerImg, count: 0},
    {name: 'Pizza', price: 100, image: PizzaImg, count: 0},
    {name: 'Hot-dog', price: 100, image: HotDogImg, count: 0},
    {name: 'Fries', price: 50, image: FriesImg, count: 0},
    {name: 'Coffee', price: 70, image: CoffeeImg, count: 0},
    {name: 'Tea', price: 20, image: TeaImg, count: 0},
    {name: 'Cola', price: 40, image: ColaImg, count: 0},
    {name: 'Milkshake', price: 90, image: MilkshakeImg, count: 0},
  ]);

  const addOrder = () => {
    console.log(orders[0].name);
  };

  return (
    <div className="container">
      <OrderRightSide orders={orders} addOrder={addOrder}/>
    </div>
  );
}

export default App;
