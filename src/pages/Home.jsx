import Helmet from "../Componentes/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";

import "../styles/home.css";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../Componentes/UI/category/Category";

export const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            {" "}
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">Jeito fácil de fazer um pedido</h5>
                <h1 className="mb-4 hero__title">
                  <span>FOME?</span> Espere a <br /> comida
                  <span> na sua porta</span>
                </h1>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                  magni delectus tenetur autem, sint veritatis!
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Pedir agora <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">Veja todos os pratos</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    Sem taxa de envio
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    100% Pagamento seguro
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>
    </Helmet>
  );
};
export default Home;
