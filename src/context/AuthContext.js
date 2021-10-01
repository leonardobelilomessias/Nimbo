import React,{ createContext, useCallback } from "react";
import api from "../service/api";
 const AuthContext = createContext()
 const AuthProvider = ({children})=>{
  const singIn =  useCallback(async({email,password})=>{
    const response = await api.post('sessions',{email,password})
    console.log(response.data)
  },[])
  return(
    <AuthContext.Provider value ={{nome:'Leonardo',singIn}}>
      {children}
    </AuthContext.Provider>
  )
}
export {AuthProvider,AuthContext}