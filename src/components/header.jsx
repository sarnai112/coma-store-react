import { Col, Container, NavbarBrand, Row } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container
      fluid
      className="mb-5 bg-light sticky-top px-3 py-4 align-items-center"
    >
      <Row>
        <Col lg={4}>
          <Row>
            <Col>
              <form className="d-flex " role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-dark" type="submit">
                  <IoSearch size={18} />
                </button>
              </form>
            </Col>
            <Col
              lg={4}
              className="d-flex align-items-center justify-content-center"
            >
              <Link to={"/"}>
                <NavbarBrand>Coma</NavbarBrand>
              </Link>
            </Col>
          </Row>
        </Col>
        <Col lg={4}>
          <div className="d-flex">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Brands
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Col>
        <Col className="d-flex align-items-center justify-content-end px-5">
          <div>
            <Link to={"/login"}>
              <FaRegUser size={22} />
            </Link>
            <Link to={"/cartView"}>
              <FiShoppingCart className="ms-3" size={22} />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
