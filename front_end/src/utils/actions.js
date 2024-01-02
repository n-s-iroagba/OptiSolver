export const loadUserName =  (details,setDetails)=>{
    let tempDetails= details
    if (tempDetails.username ==='*')
    tempDetails.username = localStorage.getItem('optiusername')
  setDetails(tempDetails)
}


