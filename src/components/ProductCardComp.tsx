import { Badge, Button, ButtonGroup, Card, Col } from "react-bootstrap"

import { useState } from 'react'
import PaymentModalComp from "./PaymentModalComp"
import RatingComp from "./RatingComp"

import { useProductContext } from "../context/ProductContext"
import OffCanvasComp from "./OffCanvasComp"

//import types
import { Product } from "../types"

export default function ProductCardComp(product: Product) {

    const { id, name, category, badge, image, originalPrice, discountPrice, discountRate, rating } = product

    const { addToCart } = useProductContext()
    const [showOffCanvas, setShowOffCanvas] = useState(false)
    const [showPaymentModal, setShowPaymentModal] = useState(false)

    const doAddToCart = () => {
        setShowOffCanvas(true)
        addToCart(product)
    }

    return (
        <>
            <Col className="p-2">
                <Card>
                    <Card.Body>
                        <Badge style={{ position: "absolute", top: '20px', right: '20px' }} className="bg-danger">{badge}</Badge>
                        <Card.Img src={image} />
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle className="text-muted" style={{ fontSize: '12px' }}> &gt; {category}</Card.Subtitle>
                        <Col>
                            <Badge><del>${originalPrice}</del> ${discountPrice}</Badge> <Col style={{ fontSize: '12px', fontWeight: "bold", display: "inline" }}>{discountRate}% off!</Col>
                        </Col>

                        <Col className="mt-1" style={{ color: "rgba(0,0,0,0.4", fontSize: '12px' }}>
                            <span>Ratings : <RatingComp rating={rating} /></span>
                        </Col>

                    </Card.Body>
                    <ButtonGroup size="sm" className="p-2">
                        <Button onClick={() => setShowPaymentModal(true)}>Buy now</Button>
                        <Button variant="outline-primary" onClick={doAddToCart}>Add to cart</Button>
                    </ButtonGroup>
                </Card>

                {/* <PaymentModalComp onHide={() => setShowPaymentModal(false)} show={showPaymentModal} /> */}
                {showPaymentModal && <PaymentModalComp onHide={() => setShowPaymentModal(false)} show={true} productId={id} />}
                <OffCanvasComp show={showOffCanvas} onClose={() => setShowOffCanvas(!showOffCanvas)} productImage={image} productName={name} />
            </Col>
        </>
    )
}
