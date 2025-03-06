import {  createContext, useState } from "react";

export const Authcontext = createContext()

export const Authcontextprovied = ({children})=>{
     const admininfo = localStorage.getItem("token");
     
     const [user,setuser] = useState(JSON.parse(admininfo));

     const login = (user)=>{
        setuser(user)
     }
     const logout = ()=>{
        localStorage.removeItem("token");
        setuser(null)
     }


     return (
        <Authcontext.Provider value={{login,user,logout}}>
            {children}
        </Authcontext.Provider>
     )



       

}