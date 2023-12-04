const id = localStorage.getItem('optiUserId');
export const solveServerUrl = id ? `http://localhost:5000/${id}` : 'http://localhost:3000/login';
export const loginUrl2 = 'https://0.0.0.0:443/login'
export const getNamesUrl = 'http://localhost:5000/names'
export const loginUrl='http://localhost:5000/login'
export const registerUrl = 'http://localhost:5000/student'
