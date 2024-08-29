import React from 'react';

function Product({ product, onBuy, onSell, balance }) {
  return (
    <div className="product">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>Price: £{product.price.toLocaleString()}</p>
        <div className='product-button'>
            <button onClick={onSell} disabled={product.quantity === 0}>
                Sell
            </button>
            <span>{product.quantity}</span>
            <button onClick={onBuy} disabled={balance < product.price}>
                Buy
            </button>
        </div>
    </div>
  );
}

export default Product;
