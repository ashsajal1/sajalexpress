import { Button, Offcanvas, Row, Image, Badge, Container } from 'react-bootstrap';
import { FiCheck } from 'react-icons/fi'
import { Link } from 'react-router-dom';
import useWindowSize from '../utilities/useWindowSize';

export default function OffCanvasComp({ show, onClose, productImage, productName }: { show: boolean, onClose: () => void, productImage: string, productName: string }) {

    const isMobile = useWindowSize()

    return (
        <>
            <Offcanvas show={show} onHide={onClose} placement={isMobile ? "bottom" : "end"}>
                <Offcanvas.Header closeButton>
                    <Container className='position-relative '>
                        <Image height={80} width={80} src={productImage} alt={productName} />
                        <Badge className='position-absolute top-0 translate-middle badge rounded-pill bg-success'><FiCheck /></Badge>
                    </Container>

                    <Offcanvas.Title>1 Item added to cart!</Offcanvas.Title>

                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Row className='gap-1'>
                        <Button onClick={onClose} variant='outline-primary'>Keep shopping</Button>
                        <Button><Link className='text-white text-decoration-none' to={'cart'}>Show cart and checkout</Link></Button>
                    </Row>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

}

