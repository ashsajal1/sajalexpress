import { Container, Row } from "react-bootstrap";
import ProductCardComp from "../components/ProductCardComp";

//Fetch data from API
import { productList } from '../api/productData'

export default function HomePage() {
  return (
    <Container fluid>
      <Row md={4} sm={3} xs={2}>
        {productList.map(({ id, name, category, badge, tags, image, originalPrice, discountPrice, discountRate, rating }) => (
        <ProductCardComp
          key={id}
          id={id}
          name={name}
          category={category}
          badge={badge}
          tags={tags}
          image={image}
          originalPrice={originalPrice}
          discountPrice={discountPrice}
          discountRate={discountRate}
          rating={rating}
        />
        ))}

      </Row>
    </Container>
  )
}
