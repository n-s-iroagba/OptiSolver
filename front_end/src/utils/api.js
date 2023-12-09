import axios from 'axios';
import {getNamesUrl, loginUrl} from './data'
import { solveServerUrl,registerUrl } from './data';

export const solveSimplex = async(url,data,token)=>{
    
    try {
        const response = await axios.post(url,data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
    
        
        return (response.data);
      } catch (error) {
        console.error('Error:', error.message);
    }
    }

export const getNames = async ()=>{
    return await axios.get(getNamesUrl)
}
export const login = async(details)=>{
    return await axios.post(loginUrl,details)
}
export const signUp = async(details)=>{
    return await axios.post(registerUrl,details)
}