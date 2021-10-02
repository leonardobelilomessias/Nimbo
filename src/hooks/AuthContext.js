import React,{ createContext, useCallback,useState,useContext } from "react";
import api from "../service/api";
const AuthContext = createContext()

const AuthProvider = ({children})=>{
  const [data, setData] = useState(()=>{
    const token = localStorage.getItem('@ninbo:token')
    const user = localStorage.getItem('@ninbo:user')
    if(token && user){
      return {token, user:JSON.parse(user)}
    }
    return {}
  })
  const singIn =  useCallback(async({email,password})=>{
    const response = await api.post('sessions',{
      email,
      password})
    
    console.log(response.data.user)
    const {token,user} = response.data
    localStorage.setItem('@ninbo:token',token)
    localStorage.setItem('@ninbo:user',JSON.stringify(user))
    setData({token,user})
  },[])
  
const singOut = useCallback(()=>{
  localStorage.removeItem('@ninbo:user')
  localStorage.removeItem('@ninbo:token')
  setData({})
},[])

  return(
    <AuthContext.Provider value ={{user:data.user,singIn,singOut}}>
      {children}
    </AuthContext.Provider>
  )
}
function useAuth(){
  const context = useContext(AuthContext)
  if(!context){
    throw new Error('Use Auth must to be used with an AuthProvider')
  }
  return context
}
export {AuthProvider, useAuth}