import { Modal, Row, Col, Button } from "react-bootstrap";
import { FaPaypal, FaGooglePay } from 'react-icons/fa6'

export default function PaymentModalComp({ show, onHide }: { show: boolean, onHide: () => void }) {
    return (
        <>
            <Modal show={show} onHide={onHide} fullscreen>
                <Modal.Header className="bg-primary text-white" closeButton>
                    <strong>Procced to Payment!</strong>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>Col</Col>
                    </Row>
                    <Row md={3} className="gap-1 d-flex justify-content-center">
                        <Button variant="outline-primary">Procced via <FaPaypal /></Button>
                        <Button variant="outline-primary">Procced via <FaGooglePay /></Button>
                        <Button>Cancle</Button>

                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Add to cart</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
