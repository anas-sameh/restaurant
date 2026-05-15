import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css';

const Dashboard = () => {

  const [activeTab, setActiveTab] = useState('orders');

  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <aside className="dashboard-sidebar">

        <h2 className="text-danger fw-bold mb-4">
          Admin Panel
        </h2>

        <ul className="sidebar-menu">

          <li
            className={activeTab === 'orders' ? 'active' : ''}
            onClick={() => setActiveTab('orders')}
          >
            <i className="bi bi-box-seam"></i>
            Orders
          </li>

          <li
            className={activeTab === 'add-item' ? 'active' : ''}
            onClick={() => setActiveTab('add-item')}
          >
            <i className="bi bi-plus-circle"></i>
            Add Menu Item
          </li>

        </ul>

      </aside>

      {/* Content */}
      <main className="dashboard-content">

        {activeTab === 'orders' && <OrdersView />}

        {activeTab === 'add-item' && <AddMenuItemView />}

      </main>

    </div>
  );
};





/* ========================= */
/* Orders */
/* ========================= */

const OrdersView = () => {

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchOrders = async () => {

      try {

        const token = localStorage.getItem('token');

        if (!token) return;

        const response = await axios.get(
          'http://localhost:8080/orders',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setOrders(response.data);

      } catch (error) {

        console.error('Error fetching orders:', error);

      } finally {

        setLoading(false);

      }
    };

    fetchOrders();

  }, []);

  return (
    <div className="view-container">

      <h3>All Orders</h3>

      {
        loading ? (
          <p>Loading orders...</p>
        ) : (
          <table className="admin-table">

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {
                orders.length === 0 ? (

                  <tr>
                    <td colSpan="4" className="text-center">
                      No orders found.
                    </td>
                  </tr>

                ) : (

                  orders.map((order, index) => (

                    <tr key={index}>

                      <td>
                        #{order.id || index + 1}
                      </td>

                      <td>
                        {order.customerName || 'Unknown'}
                      </td>

                      <td>
                        <span
                          className={`status-badge ${order.status?.toLowerCase() || 'pending'}`}
                        >
                          {order.status || 'Pending'}
                        </span>
                      </td>

                      <td>
                        <button className="btn btn-sm btn-outline-danger">
                          View
                        </button>
                      </td>

                    </tr>

                  ))
                )
              }

            </tbody>

          </table>
        )
      }

    </div>
  );
};






/* ========================= */
/* Add Menu Item */
/* ========================= */

const AddMenuItemView = () => {

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    image: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const token = localStorage.getItem('token');

      await axios.post(
        'http://localhost:8080/menu',
        {
          name: formData.name,
          price: parseFloat(formData.price),
          description: formData.description,
          image: formData.image
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert('Item added successfully! ✅');

      setFormData({
        name: '',
        price: '',
        description: '',
        image: ''
      });

    } catch (error) {

      console.error('Error adding item:', error);

      alert(
        error.response?.data ||
        'Failed to add item'
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="view-container">

      <h3>Add New Menu Item</h3>

      <div className="form-card">

        <form onSubmit={handleSubmit} className="admin-form">

          {/* Name */}
          <div className="form-group">

            <label>Item Name</label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />

          </div>

          {/* Price */}
          <div className="form-group">

            <label>Price ($)</label>

            <input
              type="number"
              name="price"
              required
              value={formData.price}
              onChange={handleChange}
            />

          </div>

          {/* Description */}
          <div className="form-group">

            <label>Description</label>

            <textarea
              name="description"
              rows="4"
              required
              value={formData.description}
              onChange={handleChange}
            />

          </div>

          {/* Image */}
          <div className="form-group">

            <label>Image URL</label>

            <input
              type="text"
              name="image"
              required
              value={formData.image}
              onChange={handleChange}
            />

          </div>

          {/* Preview */}
          {
            formData.image && (
              <div className="image-preview">

                <img
                  src={formData.image}
                  alt="preview"
                  style={{
                    width: '200px',
                    borderRadius: '12px',
                    marginTop: '10px'
                  }}
                />

              </div>
            )
          }

          <button
            type="submit"
            className="btn-save"
            disabled={loading}
          >
            {
              loading
                ? 'Saving...'
                : 'Save Item'
            }
          </button>

        </form>

      </div>

    </div>
  );
};

export default Dashboard; 