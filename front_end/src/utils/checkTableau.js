import { bIPush,cIPush,ceIPush,rIPush,bcIPush,fIPush,cRowIPush } from "./iteration/iPush"
import { preventNewLine } from "./createTableauHelper"


const checkMultipleColumns = async (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau) => {
    const inputConstraintEquations = iTableau.constraintEquations
    const solvedConstraintEquations = solution.constraintEquations
    let tempRow = []
    let noMatch = false
    for (let i = 0; i < dimensions.numberOfRows; i++) {
        let tempColumns = []
        for (let j = 0; j < dimensions.numberOfColumns; j++) {
            if (parseFloat(inputConstraintEquations[i][j].toFixed(2)) !== parseFloat(solvedConstraintEquations[i][j].toFixed(2))) {
                createRedCell(i,tempColumns,iTableau,setITableau,variable,j)
                noMatch = true
            } else {
                createCell(i,tempRows,iTableau,variable,j)
            }
        }
        tempRow.push(tempColumns)
    }
    let tempRTableau = responseTableau
    tempRTableau.constraintEquations = tempRow
    setResponseTableau(tempRTableau)
    tempRow = []
    return noMatch;

}

const checkFValue = async (solution, responseTableau, setResponseTableau, iTableau, setITableau) => {
    let noMatch = false
    const solvedFValue = solution.fValue;
    const inputFValue = iTableau.fValue

   
    let tempFValue;
        if (parseFloat(inputFValue.toFixed(2)) !== parseFloat(solvedFValue.toFixed(2))) {
             tempFValue =<td style={{ height:'1.5cm',borderTop:'2px solid grey',textAlign:'start',backgroundColor: 'red' }}> F=
             <span contentEditable  onKeyDown={
                (e) => preventNewLine(e)} onInput={
                    (e) => { fIPush(e,iTableau,setITableau) }}>0</span></td>
            noMatch = true
        } else if(inputFValue === solvedFValue) {
             tempFValue = <td style={{
                height:'1.5cm',borderTop:'2px solid grey',textAlign:'start',
            }}> F =<span>{solvedFValue}</span></td>
        }
    let tempRTableau = responseTableau;
    tempRTableau.fValue = tempFValue
    tempFValue=''
    setResponseTableau(tempRTableau)
    return noMatch;
}

const createRedCell = (columnArray, iTableau, setITableau, variable, i, j, pushFunction) => {
    const cellValue = j ? iTableau[variable][i][j] : iTableau[variable][i];
    columnArray.push(
      <td
        style={{ backgroundColor: 'red' }}
        contentEditable
        onKeyDown={(e) => preventNewLine(e)}
        onInput={(e) => pushFunction(e, i, variable, iTableau, setITableau)}
      >
        {cellValue}
      </td>
    );
  };

const createCell = (i,columnArray,iTableau,variable,j)=>{
     const cellValue = j ? iTableau[variable][i][j] : iTableau[variable][i];
    columnArray.push(<td> {cellValue}</td>)
}

const checkSingleColumn = async (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,variable) => {
    let noMatch = false
    for (let j = 0; j < dimensions.numberOfRows; j++) {
        if (parseFloat(iTableau[variable][j].toFixed(2)) !== parseFloat(solution[variable][j].toFixed(2))) {
            createRedCell(j,tempRows,iTableau,setITableau,variable)
            noMatch = true
        }else{
            createCell(j,tempRows,iTableau,variable)
        }
        let tempTab = responseTableau
        tempTab[variable] = tempRow
        setResponseTableau(tempTab)
        return noMatch
    }
}


export const checkTableau = async (iTableau, solvedArray, index, dimensions, responseTableau, setResponseTableau, setITableau) => {
   

    const solution = solvedArray[index]
    const constraintEquationDidNotMatch = await checkMultipleColumns (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    const basicVariablesDidNotMatch = await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'basicVariables')
    const constantsDidNotMatch = await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'constants')
    const basicCoefficientsDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'basicCoefficients')
    const ratioDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'ratio')
    const fValueDidNotMatch = await checkFValue(solution, responseTableau, setResponseTableau, iTableau, setITableau)
    const cRowDidNotMatch= await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'crow')
    if (fValueDidNotMatch||basicCoefficientsDidNotMatch||ratioDidNotMatch||basicVariablesDidNotMatch || constraintEquationDidNotMatch||constantsDidNotMatch||cRowDidNotMatch) {
        return false
    } else {
       return true
    }

}

export const checkLastTableau = async (iTableau, solvedArray, index, dimensions, responseTableau, setResponseTableau, setITableau) => {
   
    const solution = solvedArray[index]
    const constraintEquationDidNotMatch = await checkMultipleColumns (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    const basicVariablesDidNotMatch = await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'basicVariables')
    const constantsDidNotMatch = await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'constants')
    const basicCoefficientsDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'basicCoefficients')
    const fValueDidNotMatch = await checkFValue(solution, responseTableau, setResponseTableau, iTableau, setITableau)
    const cRowDidNotMatch= await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'crow')
    if (fValueDidNotMatch||basicCoefficientsDidNotMatch||ratioDidNotMatch||basicVariablesDidNotMatch || constraintEquationDidNotMatch||constantsDidNotMatch||cRowDidNotMatch) {
        return false
    } else {
       return true
    }

}
export const checkFirstTableau =  async (iTableau, solvedArray, index, dimensions, responseTableau, setResponseTableau, setITableau)=>{

    const solution = solvedArray[index]
    const ratioDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'ratio')
    const fValueDidNotMatch = await checkFValue(solution, responseTableau, setResponseTableau, iTableau, setITableau)
    const cRowDidNotMatch= await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'crow')
    if (fValueDidNotMatch||basicCoefficientsDidNotMatch||ratioDidNotMatch||basicVariablesDidNotMatch || constraintEquationDidNotMatch||constantsDidNotMatch||cRowDidNotMatch) {
        return false
    } else {
       return true
    }

}


