
import { preventNewLine } from "./createTableauHelper"
import { push } from "./createTableauHelper"
import { fIpush } from "./createTableauHelper"


const checkMultipleColumns = async (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau) => {
    const inputConstraintEquations = iTableau.constraintEquations
    const solvedConstraintEquations = solution.constraintEquations
    const variable = 'constraintEquations'
    let tempRow = []
    let noMatch = false
    for (let i = 0; i < dimensions.numberOfRows; i++) {
        let tempColumns = []
        for (let j = 0; j < dimensions.numberOfColumns; j++) {
            if (parseFloat(inputConstraintEquations[i][j].toFixed(2)) !== parseFloat(solvedConstraintEquations[i][j].toFixed(2))) {
                createRedCell(tempColumns, iTableau, setITableau, variable, i, j)
                noMatch = true
            } else {
                createCell(i,tempColumns,iTableau,variable,j)
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
    const variable = 'fValue'   
    let tempFValue;
        if (parseFloat(inputFValue.toFixed(2)) !== parseFloat(solvedFValue.toFixed(2))) {
             tempFValue =<td style={{ height:'1.5cm',borderTop:'2px solid grey',textAlign:'start',backgroundColor: 'red' }}> F=
             <span contentEditable  onKeyDown={
                (e) => preventNewLine(e)} onInput={
                    (e) => { fIpush(e,iTableau,setITableau) }}>0</span></td>
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

const createRedCell = (columnArray, iTableau, setITableau, variable, i, j,) => {
    const cellValue = j ? iTableau[variable][i][j] : iTableau[variable][i];
    columnArray.push(
      <td
        style={{ backgroundColor: 'red' }}
        contentEditable
        onKeyDown={(e) => preventNewLine(e)}
        onInput={(e) => push(e, i, variable, iTableau, setITableau, j)}
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
    let tempRows = []
    for (let j = 0; j < dimensions.numberOfRows; j++) {
        if (parseFloat(iTableau[variable][j].toFixed(2)) !== parseFloat(solution[variable][j].toFixed(2))) {
            createRedCell(j,tempRows,iTableau,setITableau,variable)
            noMatch = true
        }else{
            createCell(j,tempRows,iTableau,variable)
        }
        let tempTab = responseTableau
        tempTab[variable] = tempRows
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
    const fValueDidNotMatch = await checkFValue(solution, responseTableau, setResponseTableau, iTableau, setITableau,'fValue')
    const cRowDidNotMatch= await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'crow')
    if (fValueDidNotMatch||basicCoefficientsDidNotMatch||basicVariablesDidNotMatch || constraintEquationDidNotMatch||constantsDidNotMatch||cRowDidNotMatch) {
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
    if (fValueDidNotMatch||ratioDidNotMatch||cRowDidNotMatch) {
        return false
    } else {
       return true
    }

}


