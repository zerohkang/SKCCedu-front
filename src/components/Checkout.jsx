import { useNavigate, useLocation } from 'react-router-dom';
import usePrototypes from "../hooks/usePrototypes";

export default function Checkout( testpr ) {


  const location = useLocation();
  const orderInfo = { ...location.state };

  const orders = orderInfo.orders;
  const prototypes = usePrototypes();

  const navigate = useNavigate();

  const moveToHome = () => {
    navigate("/");
  };


  return (
    <aside>
      <div className="order">
        <div className="body">
          {orders.map((order) => {
            const { id } = order;
            const prototype = prototypes.find((p) => p.id === id);
            return (
              <div className="item" key={id}>
                <div className="img">
                  <video src={prototype.thumbnail} />
                </div>
                <div className="content">
                  <p className="title">
                    {prototype.title} x {order.quantity}
                  </p>
                </div>
                <div className="action">
                  <p className="price">$ {prototype.price * order.quantity}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="total">
          <hr />
          <div className="item">
            <div className="content">Total</div>
            <div className="action">
              <div className="price">$ {orderInfo.totalprice}</div>
            </div>
          </div>
          <button
            className="btn btn--secondary"
            style={{ width: "50%", marginTop: 10 }}
          >
            Payment
          </button>
          <button
            className="btn btn--third" onClick={moveToHome}
            style={{ width: "50%", marginTop: 10 }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
}