


const checkConstraintEquations = async (inputConstraintEquations,solvedConstraintEquations,dimensions,tempRTableau,setRTableau,iTableau,setITableau,preventNewLine,ceIPush)=>{
    let tempRow = []
     let noMatch = false
    for (let i = 0; i<dimensions.numberOfRows;i++){
      let tempColumns = []
        for (let j = 0; j<dimensions.numberOfColumns;j++){
            if (inputConstraintEquations[i][j].toFixed(2) != solvedConstraintEquations[i][j].toFixed(2)){
                tempColumns.push(<td style = {{backgroundColor:'red'}}contentEditable onKeyDown={
                    (e) => preventNewLine(e)} onInput={
                      (e) => {
                        ceIPush(i, j, e, iTableau, setITableau)
                      }}>{inputConstraintEquations[i][j]}</td>)
                      noMatch = true
            }else{
                tempColumns.push(<td  onKeyDown={
                    (e) => preventNewLine(e)}>{inputConstraintEquations[i][j]}</td>)
            }
        }
        tempRow.push(tempColumns)
    }
    tempRTableau.constraintEquations = tempRow
    await setRTableau(tempRTableau)

    return noMatch;

}
const checkBasicVariables = async (inputBasicVariables,solvedBasicVariables,dimensions,tempRTableau,setRTableau,iTableau,setITableau,preventNewLine,bIPush)=>{
    let tempRows=[]
    let noMatch = false
    for (let j = 0; j<dimensions.numberOfRows;j++){
        if (inputBasicVariables[j].toFixed(2) != solvedBasicVariables[j].toFixed(2)){
            tempRows.push(<td style = {{backgroundColor:'red'}}contentEditable onKeyDown={
                (e) => preventNewLine(e)} onInput={
                  (e) => {
                    bIPush(j, e, iTableau, setITableau)
                  }}>{inputBasicVariables[j]}</td>)
                  noMatch = true
        }else{
            tempRows.push(<td  onKeyDown={
                (e) => preventNewLine(e)}>{inputBasicVariables[j]}</td>)
        }
    }
   

tempRTableau.basicVariables = tempRows
await setRTableau(tempRTableau)

return noMatch;


}

export const  checkTableau=async (iTableau,solvedArray, index,setIndex,dimensions,rTableau,setRTableau,setChange,setITableau,preventNewLine,ceIPush,bIPush) =>{
    let tempRTableau = {...rTableau}
    const inputConstraintEquations = iTableau.constraintEquations
    const solvedConstraintEquations = solvedArray[index].constraintEquations
    const inputBasicVariables = iTableau.basicVariables
    const solvedBasicVariables = solvedArray[index].basicVariables
    const constraintEquationDidNotMatch = await checkConstraintEquations(inputConstraintEquations,solvedConstraintEquations,dimensions,tempRTableau,setRTableau,iTableau,setITableau,preventNewLine,ceIPush)
    const basicVariablesDidNotMatch = await  checkBasicVariables(inputBasicVariables,solvedBasicVariables,dimensions,tempRTableau,setRTableau,iTableau,setITableau,preventNewLine,bIPush)
   if (basicVariablesDidNotMatch&&constraintEquationDidNotMatch){
    return false
        
      
   }else{
    
    
    return true
   }
   
}
