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

export const login = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/login', userData);

    if (response.status === 200 || response.status === 201) {
      const authToken = response.data.token;
      const id = response.data.id;
    

      localStorage.setItem('optiAuthToken', authToken);
      localStorage.setItem('optiUserName', JSON.parse(response.data.username));
      localStorage.setItem('optiUserId', id);

      return true;
    } else {
      console.error('Failed to login user. Server responded with:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Error during user login:', error.message);
    return false;
  }
};


export const signUp = async (userData) => {
  try {
    const response = await axios.post(registerUrl, userData);
    if (response.status === 200 || response.status === 201) {
      const authToken = response.data.token;
      const id = response.data.id;
      localStorage.setItem('optiAuthToken', authToken)
      localStorage.setItem('optiUserName', userData.username)
      localStorage.setItem('optiUserId', id)
      return true;
    } else {
      alert('Failed to register user. Server responded with:', response.status);
      return false;
    }
  } catch (error) {
    console.error('Error during user registration:', error.message);
  
  }
};