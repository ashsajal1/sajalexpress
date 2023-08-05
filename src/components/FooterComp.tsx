import { Container, Row, Col } from 'react-bootstrap';

const FooterComp = () => {
  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>Twitter</li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li>Product 1</li>
              <li>Product 2</li>
              <li>Product 3</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center mt-4">
              &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComp;