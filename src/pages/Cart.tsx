import React from 'react';
import { useProductContext } from '../Context/ProductContext';

const MyComponent: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useProductContext();

  const handleAddToCart = () => {
    const product = { id: 1, name: 'Product 1', price: 10 };
    addToCart(product);
  };

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default MyComponent;