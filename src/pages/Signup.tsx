import { Form, Button, Row, Col, InputGroup, FormControl, Container, Image, Card } from 'react-bootstrap';
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from 'react-icons/fa'; // Import the icons you need

export default function Signup() {
    return (
        <Container>

            <Row>
                <Col md={6}>
                    <Card className='px-4 py-2 my-2'>
                    <Form>
                        <div className="text-center mb-3">
                            <p>Sign up with:</p>
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
                            <FormControl id="registerName" placeholder="Name" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl id="registerUsername" placeholder="Username" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl type="email" id="registerEmail" placeholder="Email" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl type="password" id="registerPassword" placeholder="Password" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                            <FormControl type="password" id="registerRepeatPassword" placeholder="Repeat password" />
                        </InputGroup>
                        <Form.Check
                            type="checkbox"
                            label="I have read and agree to the terms"
                            id="registerCheck"
                            defaultChecked
                        />
                        <Button variant="primary" type="submit" className="btn-block mb-3">
                            Sign up
                        </Button>
                    </Form>
                    </Card>
                </Col>

                <Col md={6} className='d-flex flex-row justify-content-center align-items-center'>
                    <Image fluid src='/signuplogo.avif' />
                </Col>
            </Row>
        </Container>
    )
}
