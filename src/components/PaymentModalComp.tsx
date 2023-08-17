import { Modal, Row, Col, Button, Container, Card } from "react-bootstrap";
import { FaPaypal, FaGooglePay } from 'react-icons/fa6'

export default function PaymentModalComp({ show, onHide }: { show: boolean, onHide: () => void }) {
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
