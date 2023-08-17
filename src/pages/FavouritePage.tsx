import { Row, Container } from "react-bootstrap";
import ProductPlaceholderComp from "../components/ProductPlaceholderComp";

export default function FavouritePage() {
  return (
    <>
      <Container fluid>
        <Row md={4} sm={3} xs={2}>
          <ProductPlaceholderComp />
          <ProductPlaceholderComp />
          <ProductPlaceholderComp />
          <ProductPlaceholderComp />
          <ProductPlaceholderComp />
          <ProductPlaceholderComp />
          <ProductPlaceholderComp />
          <ProductPlaceholderComp />
          <ProductPlaceholderComp />
          <ProductPlaceholderComp />
        </Row>
      </Container>
    </>
  )
}
