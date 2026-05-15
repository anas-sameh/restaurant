import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const [myOrders, setMyOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // =========================
  // Fetch Cart + Orders
  // =========================

  useEffect(() => {
    fetchCart();

    fetchOrders();
  }, []);

  // =========================
  // Fetch Cart
  // =========================

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const response = await axios.get("http://localhost:8080/cart/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const itemsWithQty = response.data.map((item) => ({
        ...item,
        quantity: 1,
      }));

      setCartItems(itemsWithQty);
    } catch (error) {
      console.error("Error fetching cart:", error);

      if (error.response?.status === 401) {
        navigate("/login");
      }
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // Fetch My Orders
  // =========================

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get("http://localhost:8080/orders/my", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMyOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  // =========================
  // Update Quantity
  // =========================

  const updateQuantity = (id, amount) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, item.quantity + amount),
            }
          : item,
      ),
    );
  };

  // =========================
  // Clear Cart
  // =========================

  const clearCart = async () => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete("http://localhost:8080/cart/clear", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCartItems([]);
    } catch (error) {
      console.error(error);

      alert("Failed to clear cart");
    }
  };

  // =========================
  // Make Order
  // =========================

  const makeOrder = async () => {
    try {
      const token = localStorage.getItem("token");

      const customerName = localStorage.getItem("userName");

      const orderData = {
        customerName,

        items: cartItems.map((item) => ({
          id: item.id,
        })),
      };

      await axios.post("http://localhost:8080/orders", orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Order placed successfully ✅");

      await clearCart();

      fetchOrders();
    } catch (error) {
      console.error(error);

      alert("Failed to place order");
    }
  };

  // =========================
  // Total Price
  // =========================

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  // =========================
  // UI
  // =========================

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1 className="cart-title">My Cart</h1>

        {loading ? (
          <h3>Loading cart...</h3>
        ) : cartItems.length === 0 ? (
          <h3>Your cart is empty</h3>
        ) : (
          <>
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td className="item-info">
                      <img
                        src={item.image || "https://via.placeholder.com/80"}
                        alt={item.name}
                      />

                      <div>
                        <h3>{item.name}</h3>

                        <p>{item.description}</p>
                      </div>
                    </td>

                    <td className="price">${item.price}</td>

                    <td>
                      <div className="quantity-control">
                        <span>{item.quantity}</span>

                        <div className="qty-btns">
                          <button onClick={() => updateQuantity(item.id, 1)}>
                            +
                          </button>

                          <button onClick={() => updateQuantity(item.id, -1)}>
                            -
                          </button>
                        </div>
                      </div>
                    </td>

                    <td className="total">${item.price * item.quantity}</td>

                    <td>
                      <button className="remove-btn">&times;</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Cart Actions */}

            <div className="cart-actions">
              <h3 className="cart-total">Total: ${totalPrice}</h3>

              <div className="cart-buttons">
                <button className="btn-checkout" onClick={makeOrder}>
                  Make Order
                </button>

                <button className="btn-clear" onClick={clearCart}>
                  Clear Cart
                </button>

                <button className="btn-continue" onClick={() => navigate("/")}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}

        {/* ========================= */}
        {/* My Orders */}
        {/* ========================= */}

        <div className="my-orders-section">
          <h2 className="orders-title">My Orders</h2>

          {myOrders.length === 0 ? (
            <p>No orders yet.</p>
          ) : (
            myOrders.map((order, index) => (
              <div className="order-card" key={index}>
                <h4>Order #{order.id}</h4>

                <p>
                  Customer:
                  {order.customerName}
                </p>

                <p>
                  Status:
                  <span className="order-status">
                    {order.status || "Pending"}
                  </span>
                </p>

                <div className="order-items">
                  {order.items?.map((item) => (
                    <div className="order-item" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div>
                        <h5>{item.name}</h5>

                        <p>${item.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
