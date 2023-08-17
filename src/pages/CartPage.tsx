import { Button, Container, Modal, Row } from 'react-bootstrap';
import CartProductComp from '../components/CartProductComp';
import { useProductContext } from '../temp_context/ProductContext';
import { useState } from 'react';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useProductContext();

  const [showConfirmMessage, setShowConfirmMessage] = useState(false)

  const handleRemoveFromCart = (productId: number) => {
    removeFromCart(productId);
  };

  const handleClearCart = () => {
    clearCart();
    setShowConfirmMessage(false)
  };

  return (

    <Container fluid>
      <Row md={3}>
        {cart.map(({ id, name, category, badge, tags, image, originalPrice, discountPrice, discountRate, rating, quantity }) => (
          <CartProductComp
            key={id}
            id={id}
            name={name}
            category={category}
            badge={badge}
            tags={tags}
            image={image}
            originalPrice={originalPrice}
            discountPrice={discountPrice}
            discountRate={discountRate}
            rating={rating}
            quantity={quantity}
          />
        ))}
      </Row>

      {cart.length > 0 && <Row>
        <Button onClick={() => setShowConfirmMessage(true)}>Clear All</Button>
      </Row>}

      <Modal show={showConfirmMessage}>
        <Modal.Header>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure to clear all cart item?</p>
          <Button onClick={handleClearCart}>Yes</Button>
          <Button onClick={() => setShowConfirmMessage(false)}>No</Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

