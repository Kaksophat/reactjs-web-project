import { useContext } from "react";
import { Authcontext } from "../components/context/Authcontact";
import { Navigate } from "react-router-dom";

export const Authrequird = ({children})=>{
    const {user} = useContext(Authcontext)
    console.log(user);
    
            if(!user){
        return <Navigate to={'/admin/login'}/>
            }

            return children

}