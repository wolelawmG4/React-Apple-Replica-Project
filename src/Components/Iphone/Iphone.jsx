import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Iphone.css";

function Iphone() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/iphone")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => console.log("Error: Unable to fetch!"));
  }, []);

  let flip = true;

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">iPhone</h1>
              <div className="brief-description mb-5">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products?.map((product) => {
            let order1 = 1;
            let order2 = 2;
            if (flip) {
              order1 = 2;
              order2 = 1;
            }
            flip = !flip;

            return (
              <div
                key={product.Product_id}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{product.product_name}</div>
                  <div className="product-brief">
                    {product.Product_brief_description}
                  </div>
                  <div className="starting-price">
                    {`Starting at ${product.Starting_price}`}
                  </div>
                  <div className="monthly-price">{product.Price_range}</div>
                  <div className="link-wrapper">
                    <ul>
                      <li>
                        <Link
                          to={`${product.product_name}`}
                          className="learn-more"
                        >
                          Learn More
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={product.Product_img} alt={product.product_name} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Iphone;
