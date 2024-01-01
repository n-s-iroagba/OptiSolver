


export const cePush = async (i,j,e,tableau,setTableau)=>{
    let temp_tab=tableau
    let digit = Number(e.currentTarget.textContent)
    temp_tab.constraintEquations[i][j]= digit
    await setTableau(temp_tab);  
}
export const bPush=async (i,e,tableau,setTableau)=>{
    let temp_tab=tableau
    let digit = Number(e.currentTarget.textContent)
    temp_tab.basicVariables[i]= digit
    await setTableau(temp_tab)
}
export const bcPush=(e,i,tableau,setTableau)=>{
    let temp_tab=tableau
    let digit = Number(e.currentTarget.textContent)
    temp_tab.basicCoefficients[i]= digit
    setTableau(temp_tab)
}
export const ocPush=(e,i,tableau,setTableau)=>{
    let temp_tab=tableau
    let digit = Number(e.currentTarget.textContent)
    temp_tab.objectiveCoefficients[i]= digit
    setTableau(temp_tab)
}
export const cPush=(i,e,tableau,setTableau)=>{
    let temp_tab=tableau
    let digit = Number(e.currentTarget.textContent)
    temp_tab.constants[i]= digit
    setTableau(temp_tab)
}
export const cRowPush=(i,e,tableau,setTableau)=>{
    let temp_tab=tableau
    let digit = Number(e.currentTarget.textContent)
    temp_tab.cRow[i]= digit
    setTableau(temp_tab)
}
export const fPush=(e,tableau,setTableau)=>{
    let temp_tab=tableau
    let digit = Number(e.currentTarget.textContent)
    temp_tab.fValue = digit
    setTableau(temp_tab)
}
export const rPush=(i,e,tableau,setTableau)=>{
    let tempTab=tableau
    let digit = Number(e.currentTarget.textContent)
    tempTab.ratio[i]= digit
    setTableau(tempTab)
}
export const push = (e, i, variable, tableau, setTableau, j) => {
    let tempTab = tableau;
    let digit = Number(e.currentTarget.textContent);

    if (j !== undefined) {
        tempTab[variable][i][j] = digit;
    } else {
        tempTab[variable][i] = digit;
    }

    setTableau(tempTab);
    console.log(tempTab);
};


