import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublicRoute = ({children}) => {

  const {authState} = useContext(AuthContext);
 
 

  return (!authState.logged)?children:<Navigate to="/marvel"/>;
  
}
