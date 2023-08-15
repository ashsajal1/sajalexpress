import { useProductContext } from '../context/ProductContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useProductContext();

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
            {product.name} - ${product.discountPrice}
            <button onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

