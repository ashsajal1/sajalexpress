import { Button, Col, Offcanvas, Form, Badge } from "react-bootstrap"
import { CiMenuFries, CiHome, CiLogin, CiShare1, CiShoppingCart, CiAlarmOn } from "react-icons/ci"

import { useState } from "react"
import { NavLink } from "react-router-dom"

export default function MobileNavComp() {
    const [showMenu, setshowMenu] = useState(false)

    const handleClose = () => {
        setshowMenu(false)
    }
    return (
        <>
            <Button onClick={() => setshowMenu(!showMenu)}>
                <CiMenuFries />
            </Button>

            <Offcanvas show={showMenu} onHide={handleClose} responsive="lg">
                <Offcanvas.Header closeButton>
                    Menu
                </Offcanvas.Header>
                <Offcanvas.Body className="text-white">

                    <Form className="d-flex flex-row mb-3">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-primary">Search</Button>
                    </Form>

                    <Col className="m-auto" style={{ border: '1px solid rgba(0,0,0,0.1)', width: '50%', }}></Col>

                    <NavLink onClick={handleClose} className='text-decoration-none text-white' to={'/'}>
                        <Col className="bg-primary p-2 rounded mt-2"><CiHome size='25px' /> Home</Col>
                    </NavLink>
                    <NavLink onClick={handleClose} className='text-decoration-none text-white' to={'/register'}>
                        <Col className="bg-primary p-2 rounded mt-2"><CiLogin size='25px' /> Login/Register</Col>

                    </NavLink>
                    <NavLink onClick={handleClose} className='text-decoration-none text-white' to={'/cart'}>
                        <Col className="bg-primary p-2 rounded mt-2"><CiShoppingCart size='25px' /> Carts <Badge className="bg-danger">2</Badge></Col>
                    </NavLink>

                    <Col className="bg-primary p-2 rounded mt-2"><CiShare1 size='25px' /> Explore Products</Col>
                    <Col className="bg-primary p-2 rounded mt-2"><CiAlarmOn size='25px' /> Notifications <Badge className="bg-danger">2</Badge></Col>

                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}
