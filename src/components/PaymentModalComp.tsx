import { Modal, Button, Card, Container, Col } from "react-bootstrap";
import { FaGooglePay } from 'react-icons/fa6'
import { useProductContext } from "../context/ProductContext";

interface PaymentModalProps {
    show: boolean,
    onHide: () => void,
    productId: number
}

export default function PaymentModalComp({ show, onHide, productId }: PaymentModalProps) {

    const { cart } = useProductContext()

    const requestedProduct = cart.filter(product => product.id === productId)
    console.log(requestedProduct)
    const {image, quantity, discountPrice} = requestedProduct[0]

    return (
        <>
            <Modal show={show} onHide={onHide} fullscreen>
                <Modal.Header className="bg-primary text-white" closeButton>
                    <strong>Procced to Payment!</strong>
                </Modal.Header>
                <Modal.Body>

                    <Card>
                        <Card.Header>Select Payment Method</Card.Header>
                        <Card.Body>
                            {requestedProduct ? (
                                <Container>
                                    <Card.Img src={image} alt={''} />
                                    <Col className="text-danger">Quantity : {quantity} <br></br>Total Price : {quantity * discountPrice} </Col>
                                </Container>
                            ) : (
                                <Container>No product is selected yet!</Container>
                            )}
                            <Button variant="outline-primary">
                                <img src='/paypal.svg' alt="PayPal" className="paypal-logo" />
                                Pay with PayPal
                            </Button>
                            <Button variant="outline-primary">Procced via <FaGooglePay /></Button>
                        </Card.Body>
                        <Card.Footer>
                            <Button >Place Order</Button>
                        </Card.Footer>
                    </Card>

                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={onHide}>Cancle</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
