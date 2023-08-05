import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

const NotFound = () => {
  return (
    <Container fluid className={`container mt-4`}>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <Alert variant="danger" className="text-center">
            <h1 className="title">404 - Page Not Found</h1>
            <p className="message">Oops! The page you are looking for does not exist.</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;