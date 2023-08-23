import {
  Modal,
  Button,
  Card,
  Container,
  Col,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { useProductContext } from "../context/ProductContext";
import { productList } from "../api/productData";
import { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";

interface PaymentModalProps {
  show: boolean;
  onHide: () => void;
  productId: number;
}

function PaymentModalComp({ show, onHide, productId }: PaymentModalProps) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    null | string
  >(null);

  const paymentMethods = ["Paypal", "Google Pay", "Card"];

  const { cart } = useProductContext();

  const existedProductInCart = cart.filter(
    (product) => product.id === productId
  );
  const nonExistedProductInCart = productList.filter(
    (product) => product.id === productId
  );

  console.log(productId);
  console.log(existedProductInCart);

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
                <Card.Img
                  src={
                    doExistInCart
                      ? existedProductInCart[0].name
                      : nonExistedProductInCart[0].image
                  }
                  alt={
                    doExistInCart
                      ? existedProductInCart[0].name
                      : nonExistedProductInCart[0].name
                  }
                />
                <Col className="text-danger">
                  Quantity :{" "}
                  {doExistInCart ? existedProductInCart[0].quantity : 1}{" "}
                  <br></br>Total Price :{" "}
                  {doExistInCart
                    ? existedProductInCart[0].quantity *
                      existedProductInCart[0].discountPrice
                    : nonExistedProductInCart[0].discountPrice}{" "}
                </Col>
              </Container>

              {paymentMethods.map((method) => (
                <Button
                  onClick={() => setSelectedPaymentMethod(method)}
                  variant={
                    selectedPaymentMethod === method
                      ? "primary"
                      : "outline-primary"
                  }
                >
                  {method}
                </Button>
              ))}

              {selectedPaymentMethod === "Card" && (
                <Form>
                  <Form.Group>
                    <Form.Label>Card Holder Name</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Card Holder Name"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Card number</Form.Label>
                    <InputGroup>
                      <Form.Control placeholder="Valid Card Number"></Form.Control>

                      <InputGroup.Text>
                        <CiCreditCard1 />
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <Row>
                    <Col>
                      <Form.Label>EXPIRATION DATE</Form.Label>
                      <Form.Control placeholder="MM / YY"></Form.Control>
                    </Col>
                    <Col>
                      <Form.Label>CVC</Form.Label>
                      <Form.Control placeholder="CV CODE"></Form.Control>
                    </Col>
                  </Row>
                </Form>
              )}
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <Row>
                <Col xs={12}>
                  <Button className="btn-block " variant="primary">Confirm Payment</Button>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onHide}>Cancle</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentModalComp;
