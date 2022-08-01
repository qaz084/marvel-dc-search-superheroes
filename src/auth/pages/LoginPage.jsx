import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";


export const LoginPage = () => {

const navigation=useNavigate();
const {login} = useContext(AuthContext);

  const onLogin = () => {
    const lastPath= localStorage.getItem("lastPath")||'/';
    login(inputValue)
    navigation(lastPath,{
      replace:true,
    })

  }
  const [inputValue, setInputValue] = useState('');

  const onInputChange=({target})=> {

    setInputValue(target.value)
   
  }
  return (
   
  <div className="d-flex flex-column align-items-center container w-100 mt-5">

    <img src="assets\heroes\logologin.png" style={{width: 100}} alt="" />
    <h2>Login</h2>
    <hr />
    <div className="d-flex flex-column w-50 ">
      <input type="text" placeholder="UserName" 
        onChange={onInputChange}
        value={inputValue}
      />
      <input type="password" name="password" placeholder="Password -NOT REQUIRED-" />
    </div>
    <button 
    onClick={onLogin}
    className="btn btn-primary mt-3 w-50">Login</button>
  </div>
  )
}
