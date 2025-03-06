import { useContext, useEffect, useState } from "react";
import { ShopContext } from "./context/Shopcontext";
import { useParams } from "react-router-dom";
import "./display.css";

const Displayproduct = () => {
    const { all_product, addtocart } = useContext(ShopContext);
    const { productid } = useParams();
    
    const product = all_product.find((e) => e.id === Number(productid));
    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);
    
    useEffect(() => {
        const fetchProductImages = async () => {
            try {
                const response = await fetch(`http://localhost:8000/api/productimages/${productid}`);
                const data = await response.json();
                if (data.productimage && data.productimage.length > 0) {
                    setImages(data.productimage);
                    setSelectedImage(data.productimage[0].image_url);
                }
            } catch (error) {
                console.error("Error fetching product images:", error);
            }
        };
        fetchProductImages();
    }, [productid]);
    
    return (
        <div className="displayproduct">
            <div className="displayproduct-left">
                <div className="displayproduct-img-list">
                    {images.map((img, index) => (
                        <img 
                            key={index}
                            src={img.image_url} 
                            alt={`Product image ${index + 1}`} 
                            onClick={() => setSelectedImage(img.image_url)} 
                            style={{ cursor: "pointer", margin: "5px", border: selectedImage === img.image_url ? "1px solid black" : "none" }}
                        />
                    ))}
                </div>
                <div className="displayproduct-img">
                    {selectedImage && (
                        <img
                            className="displayproduct-main-img"
                            src={selectedImage}
                            alt="Main product display"
                        />
                    )}
                </div>
            </div>
            <div className="displayproduct-right">
                <h2>{product?.title}</h2>
                <div className="displayproduct-right-price">
                    <div className="displayproduct-right-price-old">
                        ${product?.compare_price}
                    </div>
                    <div className="displayproduct-right-price-new">
                        ${product?.price}
                    </div>
                </div>
                <div className="displayproduct-right-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <button onClick={() => addtocart(product?.id)}>ADD TO CART</button>
            </div>
        </div>
    );
};

export default Displayproduct;