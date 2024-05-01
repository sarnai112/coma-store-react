import { Col, Container, Image, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Dress1 from "../assets/images/dress1.jpeg";

export default function ProductList({ productTitles }) {
  return (
    <Container className="my-3">
      {productTitles &&
        productTitles.map((item) => {
          return (
            <>
              <Row className="mt-5">
                <Col lg={3}>
                  <h5 className="fw-bold">{item.title}</h5>
                </Col>
                <Col></Col>
                <Col lg={3}>
                  <a href="#" className="text-decoration-none text-primary">
                    Shop the collection
                  </a>
                  <span className="text-primary ms-1    " aria-hidden="true">
                    &rarr;
                  </span>
                </Col>
              </Row>
              <Row className="mt-3">
                {item &&
                  item.products.map((prod) => {
                    return (
                      <Col lg={4}>
                        <div>
                          <div>
                            <Image rounded src={prod.image} height={"342px"} />
                          </div>
                          <h3>
                            <a
                              href="$"
                              className="text-decoration-none fw-normal fs-5 text-dark"
                            >
                              <span>{prod.title}</span>
                            </a>
                          </h3>
                          <span className="fs-6 text-tertiary">
                            {prod.color}
                          </span>
                          <p className="fs-6 fw-bold">{prod.price}</p>
                        </div>
                      </Col>
                    );
                  })}
              </Row>
            </>
          );
        })}
    </Container>
  );
}
