import axios from 'axios';
import {loginUrl} from './data'
import { solveServerUrl } from './data';

export const solveSimplex = async(data)=>{
    return await axios.post(solveServerUrl,data)
}
export const login= async()=>{
    const url = await axios.get(loginUrl)
    window.open(url.data,'_blank')
    
}