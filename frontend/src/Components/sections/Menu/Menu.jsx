import { useEffect, useState } from "react";
import axios from "axios";

import Head from "../../shared/Section_Head/Head";
import "./Menu.css";

export default function Menu() {
  const section_head = {
    title: "Our Menu",
    des1: "Check Our ",
    des2: "Yummy Menu",
  };

  const [menuItems, setMenuItems] = useState([]);

  const [loading, setLoading] = useState(true);

  // fetch menu
  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:8080/menu");

        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);


  const addToCart = async (id) => {

    try {

        const token = localStorage.getItem('token');

        if (!token) {
            alert('Please login first');
            return;
        }

        await axios.post(
            `http://localhost:8080/cart/add/${id}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        alert('Added to cart ✅');

    } catch (error) {

        console.error(error);

        alert('Failed to add to cart');

    }
};

  return (
    <>
      <section id="menu">
        <div className="container">
          <div className="row">
            {/* Section Head */}
            <div className="col-lg-12 title pb-0">
              <Head data={section_head} />
            </div>
          </div>

          {/* Content */}
          <div className="row menu-content mt-5">
            {loading ? (
              <div className="text-center">
                <h4>Loading menu...</h4>
              </div>
            ) : menuItems.length === 0 ? (
              <div className="text-center">
                <h4>No menu items found</h4>
              </div>
            ) : (
              menuItems.map((item) => (
                <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                  <div className="menu-card">
                    {/* Image */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="menu-img"
                    />

                    {/* Content */}
                    <div className="menu-card-body">
                      <h3>{item.name}</h3>

                      <p className="menu-description">{item.description}</p>

                      <h4 className="menu-price">${item.price}</h4>

                      <button
                        className="add-cart-btn"
                        onClick={() => addToCart(item.id)}
                      >
                        Add To Cart
                      </button>
                    </div>  
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
