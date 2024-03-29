import logo from "../../assets/images/res-logo.png";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import "../../styles/footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="3" md="4" sm="6">
            <div className=" footer__logo text-start">
              <img src={logo} alt="logo" />
              <h5>Tasty Treat</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt pariatur accusamus
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Horário de Funcionamento</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Domingo - Quinta-Feira</span>
                <p>10:00am - 11:00pm</p>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Sexta-feira - Sábado</span>
                <p>Dia de Folga</p>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Contato</h5>
            <ListGroup className="deliver__time-list">
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <p>
                  localização: rua dos alfeneiros, Little Whingeing, Inglaterra
                </p>
              </ListGroupItem>
              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Telefone: 01712345678</span>
              </ListGroupItem>

              <ListGroupItem className=" delivery__time-item border-0 ps-0">
                <span>Email: example@gmail.com</span>
              </ListGroupItem>
            </ListGroup>
          </Col>

          <Col lg="3" md="4" sm="6">
            <h5 className="footer__title">Newsletter</h5>
            <p>inscreva-se em nossa newsletter</p>
            <div className="newsletter">
              <input type="email" placeholder="Digite seu Email" />
              <span>
                <i class="ri-send-plane-line"></i>
              </span>
            </div>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col lg="6" md="6">
            <p className="copyright__text">
              Copyright - 2022, website feito por Daniel Lins. Todos os direitos
              reservados.
            </p>
          </Col>
          <Col lg="6" md="6">
            <div className="social__links d-flex align-items-center gap-4 justify-content-end">
              <p className="m-0">Follow: </p>
              <span>
                {" "}
                <Link to="https://www.facebook.com/daniel.lins.543/">
                  <i class="ri-facebook-line"></i>
                </Link>{" "}
              </span>

              <span>
                <Link to="https://github.com/daniel-lins">
                  <i class="ri-github-line"></i>
                </Link>
              </span>

              <span>
                {" "}
                <Link to=" https://www.linkedin.com/in/daniel-lins-/">
                  <i class="ri-linkedin-line"></i>
                </Link>{" "}
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
