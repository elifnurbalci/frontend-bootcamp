import React, { useState } from 'react';
import Product from './Product';
import './App.css'

const initialBalance = 100000000000;


function App() {
  const [balance, setBalance] = useState(initialBalance);
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [productList, setProductList] = useState([
    { id: 1, name: 'Big Mac', image: '/images/big-mac.jpg', price: 2, quantity: 0 },
    { id: 2, name: 'Flip Flops', image: '/images/flip-flops.jpg', price: 3, quantity: 0 },
    { id: 3, name: 'Coca-Cola Pack', image: '/images/coca-cola-pack.jpg', price: 5, quantity: 0 },
    { id: 4, name: 'Movie Ticket', image: '/images/movie-ticket.jpg', price: 12, quantity: 0 },
    { id: 5, name: 'Book', image: '/images/book.jpg', price: 15, quantity: 0 },
    { id: 6, name: 'Lobster Dinner', image: '/images/lobster-dinner.jpg', price: 45, quantity: 0 },
    { id: 7, name: 'Big Mac1', image: '/images/big-mac.jpg', price: 2, quantity: 0 },
    { id: 8, name: 'Flip Flops1', image: '/images/flip-flops.jpg', price: 3, quantity: 0 },
    { id: 9, name: 'Coca-Cola Pack1', image: '/images/coca-cola-pack.jpg', price: 5, quantity: 0 },
    { id: 10, name: 'Movie Ticket1', image: '/images/movie-ticket.jpg', price: 12, quantity: 0 },
    { id: 11, name: 'Book1', image: '/images/book.jpg', price: 15, quantity: 0 },
    { id: 12, name: 'Lobster Dinner1', image: '/images/lobster-dinner.jpg', price: 45, quantity: 0 },
  ]);


  const handleBuy = (product) => {
    if (balance >= product.price) {
      setBalance(balance - product.price);
      const updatedProductList = productList.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
      setProductList(updatedProductList);

      const updatedPurchasedItems = purchasedItems.find(p => p.id === product.id)
        ? purchasedItems.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p)
        : [...purchasedItems, { ...product, quantity: 1 }];
      setPurchasedItems(updatedPurchasedItems);
    }
  };

  const handleSell = (product) => {
    if (product.quantity > 0) {
      setBalance(balance + product.price);
      const updatedProductList = productList.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      );
      setProductList(updatedProductList);

      const updatedPurchasedItems = purchasedItems.map(p =>
        p.id === product.id ? { ...p, quantity: p.quantity - 1 } : p
      ).filter(p => p.quantity > 0);
      setPurchasedItems(updatedPurchasedItems);
    }
  };

  return (
    <div className="container">
      <div className='title'>
      <img className='bill-gates' src="/images/billgates.jpg" alt="bill-gates" />
      <h1>Spend Bill Gates' Money</h1>
      </div>
      <h2 className='money'>Balance: £{balance.toLocaleString()}</h2>
      <div className="products">
        {productList.map((product) => (
          <Product
            key={product.id}
            product={product}
            onBuy={() => handleBuy(product)}
            onSell={() => handleSell(product)}
            balance={balance}
          />
        ))}
      </div>
      <div className="receipt">
        <h2>Your Receipt</h2>
        <ul>
          {purchasedItems.map((item) => (
            <li key={item.id}>
              {item.name} x{item.quantity} - £{item.price.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
