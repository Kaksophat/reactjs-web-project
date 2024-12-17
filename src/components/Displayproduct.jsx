import { useContext} from "react";
import { ShopContext } from "./context/Shopcontext";
import { useParams } from "react-router-dom";

const Displayproduct = () => {
    const { all_product, addtocart } = useContext(ShopContext);
    const { productid } = useParams();
    const product = all_product.find((e) => e.id === Number(productid));
  
    // const [quantity, setQuantity] = useState(1);
    // const increaseQuantity = () => setQuantity((prev) => prev + 1);
    // const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  return (
  <>
     <div className="displayproduct">
     <div className="swiper-slide" style={{width:"360px",marginLeft:"10px",height:"800px"}} key={product?.id}>
          <div className="product-item">
            <div className="image-holder">
              <img src={product?.image} alt="Books" className="product-image"style={{height:"700px"}}/>
            </div>
            </div>
          
        </div>
        <div className="displayproduct-right">
          <h1>{product?.title}</h1>
          <div className="displayproduct-right-price">
            <div className="displayproduct-right-price-new">
              ${product?.price}
            </div>
          </div>
          <div className="displayproduct-right-description">
            {product?.description}
          </div>
          {/* <div className="displayproduct-quantity">
            <h3>Quantity:</h3>
            <div className="quantity-controls">
              <button
                onClick={decreaseQuantity}
                aria-label="Decrease quantity"
                className="quantity-minus"
              >
                -
              </button>
              <span className="quantity">{quantity}</span>
              <button
                onClick={increaseQuantity}
                aria-label="Increase quantity"
                className="quantity-plus"
              >
                +
              </button>
            </div>
          </div> */}
          <button onClick={() => { addtocart(product?.id) }}>ADD TO CART</button>
        </div>
      </div>

  </>
  )
}

export default Displayproduct