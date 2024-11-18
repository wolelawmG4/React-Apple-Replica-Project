import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageNotFound from "../PageNotFound/PageNotFound";

function SingleProduct() {
  const [product, setProduct] = useState(null);

  const { productName } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/iphone")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.products.find(
          (product) => product.product_name === productName
        );

        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          setProduct(null);
        }
      })
      .catch(() => {
        console.log("Error: Unable to fetch!");
      });
  }, [productName]);

  if (!product) {
    return <PageNotFound />;
  }

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">{product.product_name}</h1>
              <div className="brief-description mb-5">
                {product.Product_brief_description}
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-center product-holder h-100">
            <div className="col-sm-12 col-md-6 my-auto">
              <div className="starting-price">
                {`Starting at ${product.Starting_price}`}
              </div>

              <div className="monthly-price">{product.Price_range}</div>

              <div className="product-brief">{product.Product_description}</div>
            </div>

            <div className="col-sm-12 col-md-6">
              <div className="product-image">
                <img src={product.Product_img} alt={product.product_name} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SingleProduct;
