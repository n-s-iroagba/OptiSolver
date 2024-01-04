import {  jwtVerify} from 'jose';;


const verifyToken =  (token) => {
  
    if (token===null) {
      return false;
    }
    return true;
};

export const isAuthorized = ()=>{
    const token = localStorage.getItem('optiAuthToken')
   
    return  verifyToken(token)
    
}