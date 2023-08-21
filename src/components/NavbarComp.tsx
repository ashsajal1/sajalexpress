import { Nav, Badge, Button, Form } from "react-bootstrap";
import { CiShoppingCart, CiLogin } from 'react-icons/ci'
import { NavLink } from "react-router-dom";

import { useProductContext } from "../context/ProductContext";

import MobileNavComp from "./MobileNavComp";

export default function NavbarComp() {
  const { cart } = useProductContext();

  return (
    <>
      <Nav className="justify-content-between align-items-center bg-primary px-3" style={{ height: '50px' }}>
        <Nav.Item><NavLink className='text-decoration-none text-white' to={'/'}>React Shop</NavLink></Nav.Item>

        <Nav.Item className="d-md-none">
          <MobileNavComp />
        </Nav.Item>

        <Nav.Item className="d-md-flex d-none gap-3">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form>

          <Button variant="outline-light">
            <NavLink to="cart" style={{ position: 'relative' }}>
              <Badge className="bg-danger d-flex justify-content-center align-items-center" style={{ position: 'absolute', top: '0', right: '0', transform: 'translate(65%, -40%', height: '15px', width: '15px', fontSize: '10px' }}>{cart.reduce((acc, item) => acc + item.quantity, 0)}</Badge>
              <CiShoppingCart size={'25px'} color="white" />
            </NavLink>
          </Button>

          <Button>
            <CiLogin size={'25px'} />
          </Button>

        </Nav.Item>

      </Nav>
    </>
  )
}
