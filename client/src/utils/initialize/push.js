


export const cePush = async (i,j,e,tableau,setTableau)=>{
    let temp_tab={...tableau}
    let digit = Number(e.currentTarget.textContent)
    temp_tab.constraintEquations[i][j]= digit
    await setTableau(temp_tab);  
}
export const bPush=async (i,e,tableau,setTableau)=>{
    let temp_tab={...tableau}
    let digit = Number(e.currentTarget.textContent)
    temp_tab.basicVariables[i]= digit
    await setTableau(temp_tab)
}
export const bcPush=(e,i,tableau,setTableau)=>{
    let temp_tab={...tableau}
    let digit = Number(e.currentTarget.textContent)
    temp_tab.basicCoefficients[i]= digit
    setTableau(temp_tab)
}
export const ocPush=(i,e,tableau,setTableau)=>{
    let temp_tab={...tableau}
    let digit = Number(e.currentTarget.textContent)
    temp_tab.objectiveCoefficients[i]= digit
    setTableau(temp_tab)
}
export const cPush=(i,e,tableau,setTableau)=>{
    let temp_tab={...tableau}
    let digit = Number(e.currentTarget.textContent)
    temp_tab.constants[i]= digit
    setTableau(temp_tab)
}
export const cRowPush=(i,e,tableau,setTableau)=>{
    let temp_tab={...tableau}
    let digit = Number(e.currentTarget.textContent)
    temp_tab.cRow[i]= digit
    setTableau(temp_tab)
}
export const fPush=(e,tableau,setTableau)=>{
    let temp_tab={...tableau}
    let digit = Number(e.currentTarget.textContent)
    temp_tab.fValue = digit
    setTableau(temp_tab)
}