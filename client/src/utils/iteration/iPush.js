


export const ceIPush = async (i,j,e,iTableau,setITableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.constraintEquations[i][j]= digit
    await setITableau(tempTab); 
}
export const bIPush=async (i,e,iTableau,setiTableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.basicVariables[i]= digit
    await setiTableau(tempTab)
}
export const rIPush=(i,e,iTableau,setiTableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.ratio[i]= digit
    setiTableau(tempTab)
}
export const bcIPush=(e,i,iTableau,setiTableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.basicCoefficients[i]= digit
    setiTableau(tempTab)
}
export const ocIPush=(i,e,iTableau,setiTableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.objectiveCoefficients[i]= digit
    setiTableau(tempTab)
}
export const cIPush=(i,e,iTableau,setiTableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.constants[i]= digit
    setiTableau(tempTab)
}
export const cRowIPush=(i,e,iTableau,setiTableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.cRow[i]= digit
    setiTableau(tempTab)
}
export const fIPush=(i,e,iTableau,setiTableau)=>{
    let tempTab={...iTableau}
    let digit = Number(e.currentTarget.textContent)
    tempTab.func[i]= digit
    setiTableau(tempTab)
}