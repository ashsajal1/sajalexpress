import { Container, Row } from "react-bootstrap";
import ProductCardComp from "../components/ProductCardComp";

//Fetch data from API
import { productList } from '../api/productData'
import { useEffect, useState } from "react";

import { Product } from '../types'
import ProductPlaceholderComp from "../components/ProductPlaceholderComp";

export default function HomePage() {
  const [products, setProducts] = useState<Product[] | null>(null)
  
  useEffect(() => {
    const delay = 1000;

    const fetchProducts = () => {
      return new Promise<Product[]>((resolve) => {
        setTimeout(() => {
          resolve(productList);
        }, delay);
      });
    };

    fetchProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <Container fluid>
      <Row md={4} sm={3} xs={2}>
        {products ? (
          products.map(({ id, name, category, badge, tags, image, originalPrice, discountPrice, discountRate, rating }) => (
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
          ))
        ) : (
          <>
            {Array.from({ length: 12 }, (_, index) => (
              <ProductPlaceholderComp key={index} />
            ))}
          </>
        )}

      </Row>
    </Container>
  )
}
