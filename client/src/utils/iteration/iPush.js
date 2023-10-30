


export const ceIPush = async (i,j,e,iTableau,setITableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.constraintEquations[i][j]= digit
    await setITableau(tempTab); 
}
export const bIPush=async (i,e,iTableau,setITableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.basicVariables[i]= digit
    await setITableau(tempTab)
}
export const rIPush=(i,e,iTableau,setITableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.ratio[i]= digit
    setITableau(tempTab)
}
export const bcIPush=(e,i,iTableau,setITableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.basicCoefficients[i]= digit
    setITableau(tempTab)
}
export const ocIPush=(i,e,iTableau,setITableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.objectiveCoefficients[i]= digit
    setITableau(tempTab)
}
export const cIPush=(i,e,iTableau,setITableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.constants[i]= digit
    setITableau(tempTab)
}
export const cRowIPush=(i,e,iTableau,setITableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.cRow[i]= digit
    setITableau(tempTab)
}
export const fIPush=(e,iTableau,setITableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.fValue= digit
    setITableau(tempTab)
}