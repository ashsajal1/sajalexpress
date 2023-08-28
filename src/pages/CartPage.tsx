import { Button, Container, Modal, Row, Image } from 'react-bootstrap';
import CartProductComp from '../components/CartProductComp';
import { useProductContext } from '../context/ProductContext';
import { useState } from 'react';

export default function CartPage() {
  const { cart, clearCart } = useProductContext();

  const [showConfirmMessage, setShowConfirmMessage] = useState(false)

  // const handleRemoveFromCart = (productId: number) => {
  //   removeFromCart(productId);
  // };

  const handleClearCart = () => {
    clearCart();
    setShowConfirmMessage(false)
  };

  if (cart.length === 0) {
    return (
      <Container className='d-flex flex-column justify-content-center align-items-center'>
        <Image fluid height={300} width={300} src='/nocart.avif' />
        <h3>No cart no show!</h3>
      </Container>
    )
  }
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

      {cart.length > 0 && <Row className='p-2'>
        <Button onClick={() => setShowConfirmMessage(true)}>Clear All</Button>
      </Row>}

      <Modal show={showConfirmMessage}>
        <Modal.Header>
          <Modal.Title>Confirm deletion!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure to clear all cart item?</p>
            <Button onClick={handleClearCart}>Yes</Button>
            <Button className='mx-2' onClick={() => setShowConfirmMessage(false)}>No</Button>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

