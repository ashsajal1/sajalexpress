
import { Form, Button, Row, Col, InputGroup, FormControl, Container, Image, Card } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa'; // Import the icons you need
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <Container>

            <Row>
                <Col md={6}>
                    <Card className='px-4 py-2 my-2'>
                        <Form>
                            <div className="text-center mb-3">
                                <p>Sign in with:</p>
                                <Button variant="link" className="btn-floating mx-1">
                                    <FaFacebookF />
                                </Button>
                                <Button variant="link" className="btn-floating mx-1">
                                    <FaGoogle />
                                </Button>
                                <Button variant="link" className="btn-floating mx-1">
                                    <FaTwitter />
                                </Button>
                                <Button variant="link" className="btn-floating mx-1">
                                    <FaGithub />
                                </Button>
                            </div>
                            <p className="text-center">or:</p>
                            <InputGroup className="mb-4">
                                <FormControl id="loginName" placeholder="Email or username" />
                            </InputGroup>
                            <InputGroup className="mb-4">
                                <FormControl type="password" id="loginPassword" placeholder="Password" />
                            </InputGroup>
                            <Row className="mb-4">
                                <Col md={6} className="d-flex justify-content-center">
                                    <Form.Check
                                        type="checkbox"
                                        label="Remember me"
                                        id="loginCheck"
                                        defaultChecked
                                    />
                                </Col>
                                <Col md={6} className="d-flex justify-content-center">
                                    <a href="#!">Forgot password?</a>
                                </Col>
                            </Row>
                            <Button variant="primary" type="submit" className="btn-block mb-4">
                                Sign in
                            </Button>
                            <div className="text-center">
                                <p>Not a member? <Link to={'/signup'}>Register</Link> </p>
                            </div>
                        </Form>
                    </Card>

                </Col>

                <Col md={6}  className='d-flex flex-row justify-content-center align-items-center'>
                    <Image fluid src='/loginlogo.avif' />
                </Col>
            </Row>

        </Container>
    )
}



