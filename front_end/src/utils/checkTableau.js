
import { preventNewLine } from "./createTableauHelper"
import { push } from "./createTableauHelper"

const checkMultipleColumns = async (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau) => {
    if (!iTableau || !iTableau.constraintEquations || !solution || !solution.constraintEquations) {
        // Handle the case where iTableau or solution is undefined or doesn't have the expected properties
        console.log('iTableau or solution is undefined or missing properties');
        return false; // or handle accordingly based on your use case
    }
    const inputConstraintEquations = iTableau.constraintEquations;
    const solvedConstraintEquations = solution.constraintEquations;
    const variable = 'constraintEquations';
    let tempRow = [];
    let noMatch = false;

    for (let i = 0; i < dimensions.numberOfRows; i++) {
        let tempColumns = [];
        for (let j = 0; j < dimensions.numberOfColumns; j++) {
            if (
                parseFloat(inputConstraintEquations[i][j].toFixed(2)) !==
                parseFloat(solvedConstraintEquations[i][j].toFixed(2))
            ) {
                tempColumns.push(
                    <td
                        style={{ backgroundColor: 'red' }}
                        contentEditable
                        onKeyDown={(e) => preventNewLine(e)}
                        onInput={(e) => push(e, i, variable, iTableau, setITableau, j)}
                    >
                        {inputConstraintEquations[i][j]}
                    </td>
                );
                noMatch = true;
            } else {
                tempColumns.push(<td>{inputConstraintEquations[i][j]}</td>);
            }
        }
        tempRow.push(tempColumns);
    }

    let tempRTableau = responseTableau;
    tempRTableau.constraintEquations = tempRow;
    setResponseTableau(tempRTableau);
    tempRow = [];
    return noMatch;
};
const checkFValue = (solution, responseTableau, setResponseTableau, iTableau) => {
    let noMatch = false;
    const solvedFValue = solution.fValue;
    const inputFValue = iTableau.fValue;
   console.log(inputFValue,solvedFValue)
    if (parseFloat(inputFValue.toFixed(2)) !== parseFloat(solvedFValue.toFixed(2))) {
        noMatch = true;
    }

    let tempRTableau = responseTableau;
    tempRTableau.fValue = noMatch;
    setResponseTableau(tempRTableau);

    return noMatch;
};

const createRedCell = (columnArray, iTableau, setITableau, variable, i) => {
    const cellValue = iTableau[variable][i]
    
    columnArray.push(
      <td
        style={{ backgroundColor: 'red' }}
        contentEditable
        onKeyDown={(e) => preventNewLine(e)}
        onInput={(e) => push(e, i, variable, iTableau, setITableau)}
      >
        {cellValue}
      </td>
    );
  };


const createCell = (i,columnArray,iTableau,variable)=>{
     const cellValue =  iTableau[variable][i];
    columnArray.push(<td> {cellValue}</td>)
}
const checkSingleColumn = async (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau, variable) => {
    let noMatch = false;
    let tempRows = [];
    
    for (let j = 0; j < dimensions.numberOfRows; j++) {
        if (iTableau[variable] && solution[variable] &&
            iTableau[variable][j] !== undefined && solution[variable][j] !== undefined) {

            if (parseFloat(iTableau[variable][j].toFixed(2)) !== parseFloat(solution[variable][j].toFixed(2))) {
                createRedCell(tempRows, iTableau, setITableau, variable, j) ;
                noMatch = true;
            } else {
                createCell(j, tempRows, iTableau, variable);
            }
        } else {
            
            console.log(`Undefined values detected for ${variable} at index ${j}`);
          
        }
    }
    console.log(iTableau.basicVariables)
    let tempTab = responseTableau;
    tempTab[variable] = tempRows;
    setResponseTableau(tempTab);
    return noMatch;
};

const checkBasicVariables = async (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau) => {
    let noMatch = false;
    let tempRows = [];
    let variable = 'basicVariables'
    console.log(iTableau.basicVariables)
    for (let j = 0; j < dimensions.numberOfRows; j++) {
        if (iTableau[variable] && solution[variable] &&
            iTableau[variable][j] !== undefined && solution[variable][j] !== undefined) {
            if (parseFloat(iTableau.basicVariables[j].toFixed(2)) !== parseFloat(solution[variable][j].toFixed(2))) {
                tempRows.push(
                    <td  style={{ backgroundColor: 'red' }}>
                      X<sub
                      contentEditable
                      onKeyDown={(e) => preventNewLine(e)}
                      onInput={(e) => push(e, j, variable, iTableau, setITableau)}
                      >{iTableau.basicVariables[j]}</sub>
                    </td>)
                noMatch = true;
            } else {
                tempRows.push(<td>X<sub>{iTableau.basicVariables[j]}</sub></td>)
            }
        }
    }
    let tempTab = responseTableau;
    tempTab[variable] = tempRows;
    setResponseTableau(tempTab);
    return noMatch;
};

const checkCrow= async (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau) => {
    let noMatch = false;
    let tempRows = [];
    let variable = 'crow'
    for (let j = 0; j < dimensions.numberOfColumns; j++) {
        if (iTableau.crow && solution.crow &&
            iTableau.crow[j] !== undefined && solution.crow[j] !== undefined) {
            
            if (parseFloat(iTableau.crow[j].toFixed(2)) !== parseFloat(solution.crow[j].toFixed(2))) {
                createRedCell(tempRows, iTableau, setITableau, variable, j) ;
                noMatch = true;
                
            } else {
                createCell(j, tempRows, iTableau, variable);
             
            }
        } else {
            console.log(solution)
            console.log(`Undefined values detected for ${variable} at index ${j}`);
          
        }
    }
    let tempTab = responseTableau;
    tempTab.crow = tempRows;   
    setResponseTableau(tempTab);

    return noMatch;
};
export const checkTableau = async (iTableau, solvedArray, index, dimensions, responseTableau, setResponseTableau, setITableau) => { 
    const solution = solvedArray[index]
    console.log(solution.basicVariables)
    const constraintEquationDidNotMatch = await checkMultipleColumns (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    const constantsDidNotMatch = await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'constants')
    const basicCoefficientsDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'basicCoefficients')
    const ratioDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'ratio')
    const basicVariablesDidNotMatch = await  checkBasicVariables (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    const fValueDidNotMatch = checkFValue(solution, responseTableau, setResponseTableau, iTableau)
    const cRowDidNotMatch= await  checkCrow (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    if (fValueDidNotMatch||basicCoefficientsDidNotMatch||ratioDidNotMatch||basicVariablesDidNotMatch || constraintEquationDidNotMatch||constantsDidNotMatch||cRowDidNotMatch) {
        return false
    } else {
       return true
    }

}

export const checkLastTableau = async (iTableau, solvedArray, index, dimensions, responseTableau, setResponseTableau, setITableau) => {   
    const solution = solvedArray[index]
    const constraintEquationDidNotMatch = await checkMultipleColumns (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    const basicVariablesDidNotMatch = await  checkBasicVariables (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    const constantsDidNotMatch = await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'constants')
    const basicCoefficientsDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'basicCoefficients')
    const fValueDidNotMatch = checkFValue(solution, responseTableau, setResponseTableau, iTableau)
    const cRowDidNotMatch= await  checkCrow (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    if (fValueDidNotMatch||basicCoefficientsDidNotMatch||basicVariablesDidNotMatch || constraintEquationDidNotMatch||constantsDidNotMatch||cRowDidNotMatch) {
        return false
    } else {
       return true
    }

}
export const checkFirstTableau =  async (iTableau, solvedArray, index, dimensions, responseTableau, setResponseTableau, setITableau)=>{
let solution;
 if(!Array.isArray(solvedArray)){
    solution = solvedArray
 }else{
    solution = solvedArray[index]
 }
    console.log(solution)
    const ratioDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'ratio')
    const fValueDidNotMatch = checkFValue(solution, responseTableau, setResponseTableau, iTableau)
    const cRowDidNotMatch= await  checkCrow (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    if (cRowDidNotMatch||ratioDidNotMatch||fValueDidNotMatch) {
        return false
    } else {
       return true
    }

}


