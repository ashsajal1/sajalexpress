import { Modal, Button, Card, Container, Col } from "react-bootstrap";
import { FaGooglePay } from 'react-icons/fa6'
import { useProductContext } from "../context/ProductContext";
import { productList } from '../api/productData'

interface PaymentModalProps {
    show: boolean,
    onHide: () => void,
    productId: number
}

function PaymentModalComp({ show, onHide, productId }: PaymentModalProps) {

    const { cart } = useProductContext()

    const existedProductInCart = cart.filter(product => product.id === productId)
    const nonExistedProductInCart = productList.filter(product => product.id === productId)

    console.log(productId)
    console.log(existedProductInCart)

    const doExistInCart = existedProductInCart.length !== 0;


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
                            <Container>
                                <Card.Img src={doExistInCart ? existedProductInCart[0].name : nonExistedProductInCart[0].image} alt={doExistInCart ? existedProductInCart[0].name : nonExistedProductInCart[0].name} />
                                <Col className="text-danger">Quantity : {doExistInCart ? existedProductInCart[0].quantity : 1} <br></br>Total Price : {doExistInCart ? existedProductInCart[0].quantity * existedProductInCart[0].discountPrice : nonExistedProductInCart[0].discountPrice} </Col>
                            </Container>

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

export default PaymentModalComp;