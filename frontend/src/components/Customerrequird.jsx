import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Authcontext } from "./context/Authcontact";

export const Customerrequird = ({children})=>{
    const {customer} = useContext(Authcontext)
    console.log("user",customer);
    
            if(!customer){
        return <Navigate to={'/login'}/>
            }

            return children

}