export const loadUserName =  (details,setDetails)=>{
    let tempDetails= details
    if (tempDetails.username ==='*')
    tempDetails.username = localStorage.getItem('optiusername')
  setDetails(tempDetails)
}

export function isValidMatrix(matrix) {

  if ('numberOfRows' in matrix && 'numberOfColumns' in matrix) {
    const isValidRows = matrix.numberOfRows > 1;
    const isValidColumns = matrix.numberOfColumns > matrix.numberOfRows + 1;
    return isValidRows && isValidColumns;
  }
}