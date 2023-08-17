import { useState } from 'react';
import { useProductContext } from '../context/ProductContext';

import { CartItem } from '.././types'

import { Button, Card, Badge, Col } from "react-bootstrap";
import PaymentModalComp from './PaymentModalComp';


export default function CartProductComp(product: CartItem) {
    const [showPaymentModal, setShowPaymentModal] = useState(false)
    const { addToCart, decreaseQuantity } = useProductContext()
    const { id, name, category, badge, image, originalPrice, discountPrice, discountRate, quantity } = product

    return (
        <>
            <Col className="p-2" key={id}>
                <Card>
                    <Card.Body>
                        <Badge style={{ position: "absolute", top: '20px', right: '20px' }} className="bg-danger">{badge}</Badge>
                        <Card.Img src={image} />
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="text-muted" style={{ fontSize: '12px' }}> &gt; {category}</Card.Subtitle>
                        <Badge><del>${originalPrice}</del> ${discountPrice}</Badge> <strong>{discountRate}% off!</strong>
                    </Card.Body>

                    <Card.Footer>
                        <Col className='d-flex gap-2'>
                            <Button onClick={() => addToCart(product)}>+</Button>
                            <Button onClick={() => decreaseQuantity(product.id)}>-</Button>
                            <Button onClick={() => setShowPaymentModal(true)}>Checkout</Button>
                        </Col>
                        <Col className='gap-2 d-flex'>
                            <span>Quantity : {quantity}</span>
                            <span>Total : ${quantity * discountPrice}</span>
                        </Col>
                    </Card.Footer>
                </Card>

                <PaymentModalComp onHide={() => setShowPaymentModal(false)} show={showPaymentModal} />
            </Col>
        </>
    )
}