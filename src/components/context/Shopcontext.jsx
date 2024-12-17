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
    
    const [cartitems, setcartiems] = useState(getCart());
    const [all_product,setproduct] = useState([])
    useEffect(()=>{
     fetch('https://fakestoreapi.com/products')
     .then(res=>res.json())
     .then(json=>{setproduct(json),console.log(json);
     })
    },[])

    const addtocart=(itemid)=>{
        setcartiems((prev)=>({...prev,[itemid]:prev[itemid]+1}));
        console.log(cartitems);
        
        
    }
    const removecart=(itemid)=>{
        setcartiems((prev)=>({...prev,[itemid]:prev[itemid]-1}))
    };
    
    const gettotalcart= ()=>{
        var totalamout = 0;
        for (const item in cartitems){
            if(cartitems[item]>0){
                let iteminfo = all_product.find((product)=>product.id===Number(item))
                totalamout += iteminfo.price * cartitems[item];
            }
        }
        return totalamout;
    }

    const gettotalcartitem = () => {
        let totalitem = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                totalitem += cartitems[item];
            }
        }
        console.log(totalitem);
        
        return totalitem;
    };

    const Contextvalue = {all_product, cartitems, addtocart, removecart, gettotalcartitem,gettotalcart };
     
    return (
        <ShopContext.Provider value={Contextvalue}>     
            {props.children}
        </ShopContext.Provider>
    );
};


export default ShopContextprovider