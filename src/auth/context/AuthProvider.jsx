import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { types } from '../types/types'

//ESTO YA NO HACE FALTA, PORQUE DE ESTO SE ENCARGA LA FUNCION INIT AHORA
// const initialState={
//   logged:false,
// }

const init=() => {
  const user=JSON.parse(localStorage.getItem('user'))
  return{
    logged:!!user,
    user:user,
  }
}

export const AuthProvider = ({children}) => {
    //AHORA COMO EL INIT SE HACE CARGO DEL ESTADO INICIAL, EN EL INITIAL STATE PUEDO MANDAR UN OBJETO VACIO :)
  const [authState,dispatch]=useReducer(authReducer,{},init);

  //ACTION LOGIN
  const login=(name='')=>{

    const user={id:'ABC',name};

    const action = {
      type:types.login,
      payload:user,
    }

    localStorage.setItem('user',JSON.stringify(user));

    dispatch(action);
  }
  //ACTION LOGOUT
  const logout=()=>{
    const action = {
      type:types.logout,
    }
    localStorage.removeItem('user');
    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{
      authState,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}
