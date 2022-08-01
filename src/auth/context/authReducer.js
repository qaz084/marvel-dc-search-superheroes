import { types } from "../types/types";


export const authReducer = (state={},action) =>{

  switch (action.type) {
    case types.login:
      return {
        ...state,//esto se hace para mantener o poder agregar mas estados el dia de mañana
        logged:true,
        user: action.payload,
      }

    case types.logout:
      return {
        logged:false,
      }
  
    default:
      return state;
  }

}
