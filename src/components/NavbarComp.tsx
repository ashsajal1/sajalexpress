import { Nav, Badge, Button } from "react-bootstrap";
import { IoCartOutline, IoHeartOutline } from 'react-icons/io5'
import { NavLink } from "react-router-dom";

import { useProductContext } from "../context/ProductContext";

export default function NavbarComp() {
  const { cart } = useProductContext();

  return (
    <Nav className="justify-content-between align-items-center bg-primary px-3" style={{ height: '50px' }}>
      <Nav.Item className=""><NavLink to={'/'}>React Shop</NavLink></Nav.Item>
      <Nav.Item className="d-flex gap-3">
        <Button variant="outline-light">
          <NavLink to="/cart" style={{ position: 'relative' }}>
            <Badge className="bg-danger d-flex justify-content-center align-items-center" style={{ position: 'absolute', top: '0', right: '0', transform: 'translate(65%, -40%', height: '15px', width: '15px', fontSize: '10px' }}>{cart.reduce((acc, item) => acc + item.quantity, 0)}</Badge>
            <IoCartOutline size={'25px'} color="black" />
          </NavLink>
        </Button>
        <Button variant="outline-light">
          <NavLink to="/favourite">
            <IoHeartOutline size={'25px'} color="black" />
          </NavLink>
        </Button>

      </Nav.Item>
    </Nav>
  )
}
