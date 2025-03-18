/* eslint-disable react/prop-types */
import { createContext, useState ,useEffect} from "react";


export const  ShopContext= createContext(null)
 const getCart=()=>{
       let Cart = {};
       for(let index =0; index < 300+1; index++){
        Cart[index]=0;
       }
       return Cart;
 }
const ShopContextprovider= (props)=>{
    
    const [cartitems, setcartiems] = useState([]);
    const [all_product,setproduct] = useState([])
    const [category,setcategory] = useState([])
    const [brand,setbrand] = useState([])


    useEffect(()=>{
     fetch(`${api}products`)
     .then(res=>res.json())
     .then(json=>{setproduct(json.products);

    fetch(`${api}categories`)
    .then(res=>res.json())
    .then(json=>{setcategory(json.category);})

    fetch(`${api}brands`)
    .then(res=>res.json())
    .then(json=>{setbrand(json.brand);})
     })


    },[])
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('carts')) || [];
        setcartiems(storedCart);
    }, []);
    

    const addtocart = (item) => {
        let cart = [...cartitems]
        console.log(cart);
        

        if(cartitems.length ==0){
            cart.push({
                id: `${item.id}-${Math.floor(Math.random() * 10000)}`,
                product_id:item.id,
                title: item.title,
                image:item.image_url,
                price:item.price,
                quantity: 1
            })
           
            

          
        }
        else if(cart.length > 0){
            cart.push({
                id: `${item.id}-${Math.floor(Math.random() * 10000)}`,
                product_id:item.id,
                title: item.title,
                image:item.image_url,
                price:item.price,
                quantity: 1
            })
           
        }
        setcartiems(cart)
        localStorage.setItem("carts",JSON.stringify(cart))
    };
    const removecart=(itemid)=>{
        setcartiems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    };
    
    // const gettotalcart = () => {
    //     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    //     return storedCart.reduce((total, item) => {
    //         const itemInfo = all_product.find(product => product.id === item.id);
    //         return itemInfo ? total + itemInfo.price * item.quantity : total;
    //     }, 0);
    // };

    const  gettotalcartitem = () => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        console.log(storedCart);
        return storedCart.reduce((total, item) => total + item.quantity, 0);
        
    };
    const getqty = ()=>{
        let qty =0;

        cartitems.map(item=>{
            qty += parseInt(item.quantity)
        })
        return qty
    }
    const api = "http://localhost:8000/api/";

    const updateProductList = (updatedProduct) => {
        setproduct((prevProducts) => 
          prevProducts.map((product) => 
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
      };


    const Contextvalue = {all_product, cartitems, addtocart, removecart , gettotalcartitem,getqty,category,brand,api,updateProductList};
     
    return (
        <ShopContext.Provider value={Contextvalue}>     
            {props.children}
        </ShopContext.Provider>
    );
};


export default ShopContextprovider