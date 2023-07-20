
import { useContext } from "react";
import "./PriceCard.css";
import { CartContext } from "../../Contexts/CartContext";
import { useLocation, useNavigate } from "react-router";

export const PriceCard = () => {
  const {
    getTotalPrice,
    getTotalDiscount,
    cart,
    clearCart,
  } = useContext(CartContext);

  const location = useLocation();
  const navigate = useNavigate();
  const handleClearCart=()=>{
    clearCart();
    navigate("/finalcheckout");
  }

  return (
    <>
      <h3>Order details</h3>
      <hr />
      <section>
        <ul className="price-detail-list">
          {cart.length === 0 ? (
            <p>No Product Added</p>
          ) : (
            <ul className="price-detail-list">
              {cart.map(({ title, price, qty }) => (
                <li>
                  <span>
                    {title}(x{qty})
                  </span>
                  <span className="price">{price*qty}</span>
                </li>
              ))}
            </ul>
          )}
          <li>
            <span>Discount</span>
            <span>
              -<span className="price">{getTotalDiscount()}</span>
            </span>
          </li>
          <li>
            <span>Delivery Charges</span>
            <span className="price">{getTotalPrice() === 0 ? "0" : "50"}</span>
          </li>
          <hr />
          <li className="total-price">
            <span>Total amount</span>
            <span className="price">
              {getTotalPrice() === 0 ? "0" : getTotalPrice() + 50}
            </span>
          </li>
        </ul>
      </section>
      <hr />
      <p className="saving-info">
        You will save{" "}
        <span className="discount-price">{getTotalDiscount()}</span> on this
        order
      </p>
      <button
        style={{ display: location?.pathname === "/checkout" ? "" : "none" }}
        className="btn-place-order"
        // onClick={() => navigate("/finalcheckout")}
        onClick={()=>handleClearCart()}
      >
        Place Order
      </button>
      <button
        style={{ display: location?.pathname === "/cart" ? "" : "none" }}
        className="btn-place-order"
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </button>
    </>
  );
};