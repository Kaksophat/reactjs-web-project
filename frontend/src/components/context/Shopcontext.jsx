/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";
import { Authcontext } from "./Authcontact";
import { toast } from "react-toastify";

export const ShopContext = createContext(null);

const ShopContextprovider = (props) => {
  const [favitems, setFavItems] = useState([]);
  const [cartitems, setcartiems] = useState([]);
  const [all_product, setproduct] = useState([]);
  const [category, setcategory] = useState([]);
  const [setting, setsetting] = useState({});

  const [brand, setbrand] = useState([]);
  const { customer, user } = useContext(Authcontext);
  const api = "http://localhost:8000/api/";

  useEffect(() => {
    if (customer && customer.id) {
      const userCart =
        JSON.parse(localStorage.getItem(`cart_${customer.id}`)) || [];
      const guestCart = JSON.parse(localStorage.getItem("guest_cart")) || [];

      if (guestCart.length > 0) {
        guestCart.forEach((guestItem) => {
          const existingItemIndex = userCart.findIndex(
            (item) => item.product_id === guestItem.product_id
          );

          if (existingItemIndex >= 0) {
            userCart[existingItemIndex].quantity += guestItem.quantity;
          } else {
            userCart.push(guestItem);
          }
        });

        localStorage.removeItem("guest_cart");
      }

      localStorage.setItem(`cart_${customer.id}`, JSON.stringify(userCart));
      setcartiems(userCart);
      setFavItems(userCart);
    } else {
      const guestCart = JSON.parse(localStorage.getItem("guest_cart")) || [];
      setcartiems(guestCart);
    }
  }, [customer]);

  useEffect(() => {
    fetch(`${api}customer/products`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setproduct(json.products);
        console.log("product", json.products);
      });
    fetch(`${api}category`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setcategory(json.category);
        console.log(json.category);
      });

    fetch(`${api}brand`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${user?.token}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setbrand(json.brand);
        console.log(json.brand);
      });
  }, [user]);

  useEffect(() => {
    fetch(`${api}settings/1`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setsetting(json.setting));
  }, []);

  const addtocart = (product, type) => {
    if (!product || !product.id) return;

    let items = type === "cart" ? [...cartitems] : [...favitems];
    const existingProductIndex = items.findIndex(
      (cartItem) => cartItem.product_id === product.id
    );
    if (existingProductIndex >= 0) {
      items[existingProductIndex].quantity += 1;
    } else {
      items.push({
        id: `${product.id}-${Math.floor(Math.random() * 10000)}`, // Unique ID
        product_id: product.id,
        title: product.title,
        image: product.image_url,
        price: product.price,
        quantity: 1,
      });
    }

    if (type === "cart") {
      if (customer && customer.id) {
        localStorage.setItem(`cart_${customer.id}`, JSON.stringify(items));
      } else {
        localStorage.setItem("guest_cart", JSON.stringify(items));
        setcartiems(items);
      }
    } else {
      setFavItems(items);
    }

    toast.success(
      `Added to ${type === "cart" ? "cart" : "favorite"} successfully!`
    );
  };

  // const clearCartOnLogout = () => {
  //     if (user && user.id) {
  //         // Save current user cart to localStorage before logging out
  //         localStorage.setItem(`cart_${user.id}`, JSON.stringify(cartitems));
  //     } else {
  //         // Save guest cart
  //         localStorage.setItem("guest_cart", JSON.stringify(cartitems));
  //     }
  //     setcartiems([]);
  // };

  const shipping = () => {
    return 5;
  };

  const subtotal = () => {
    let subtotal = 0;
    cartitems.map((item) => {
      subtotal += item.quantity * item.price;
    });
    return subtotal;
  };

  const grandtotal = () => {
    return subtotal() + shipping();
  };
  const getqty = (type) => {
    let qty = 0;
    const items = type === "cart" ? cartitems : favitems; // Choose cart or favorites

    items.forEach((item) => {
      qty += parseInt(item.quantity) || 1; // Ensure default quantity for favorites
    });

    return qty;
  };

  //I wanna write code remove producrts
  const decresqty = () => {
    let qty = 1;
    cartitems.forEach((item) => {
      qty -= parseInt(item.quantity);
    });
    return qty;
  };
  const clearCart = () => {
    setcartiems([]);
  };

  const removeitem = (id) => {
    if (!id) return;

    let cart = [...cartitems];
    console.log(cart);

    const existingProductIndex = cart.findIndex(
      (cartItem) => cartItem.product_id === id
    );

    if (existingProductIndex >= 0) {
      if (cart[existingProductIndex].quantity > 1) {
        cart[existingProductIndex].quantity -= 1;
      } else {
        cart = cart.filter((cartItem) => cartItem.product_id !== id);
      }
    }
    setcartiems(cart);

    if (customer && customer.id) {
      localStorage.setItem(`cart_${customer.id}`, JSON.stringify(cart));
    } else {
      localStorage.setItem("guest_cart", JSON.stringify(cart));
    }
  };

  const Contextvalue = {
    favitems,
    cartitems,
    addtocart,
    getqty,
    category,
    api,
    brand,
    shipping,
    subtotal,
    grandtotal,
    clearCart,
    all_product,
    setting,

    removeitem,
    decresqty,
  };

  return (
    <ShopContext.Provider value={Contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextprovider;
