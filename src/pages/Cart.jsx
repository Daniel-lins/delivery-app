import Helmet from "../Components/Helmet/Helmet";

import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import CommonSection from "../Components/UI/common-section/CommonSection";

import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/cart-page.css";

import { Container, Row, Col } from "reactstrap";

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <Helmet title="Cart">
      <CommonSection title="Seu Carrinho" />
      <section>
        <Container>
          <Row>
            <Col lg="12">
              {cartItems.length === 0 ? (
                <h5 className="text-center">Seu carrinho está vazio</h5>
              ) : (
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Imagem</th>
                      <th>Titulo do Produto</th>
                      <th>Preço</th>
                      <th>Quantidade</th>
                      <th>Deletar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <Tr item={item} key={item.id} />
                    ))}
                  </tbody>
                </table>
              )}

              <div className="mt-4">
                <h6>
                  Subtotal: R$
                  <span className="cart__subtotal">{totalAmount}</span>
                </h6>
                <p>Impostos e frete serão calculados no checkout</p>
                <div className="cart__page-btn">
                  <button className="addTOCart__btn me-4">
                    <Link to="/foods">Continuar Comprando</Link>
                  </button>
                  <button className="addTOCart__btn">
                    <Link to="/checkout">Fazer o checkout</Link>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const Tr = (props) => {
  const { id, image01, title, price, quantity } = props.item;
  const dispatch = useDispatch();

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id));
  };
  return (
    <tr>
      <td className="text-center cart__img-box">
        <img src={image01} alt="" />
      </td>
      <td className="text-center">{title}</td>
      <td className="text-center">${price}</td>
      <td className="text-center">{quantity}px</td>
      <td className="text-center cart__item-del">
        <i class="ri-delete-bin-line" onClick={deleteItem}></i>
      </td>
    </tr>
  );
};

export default Cart;
