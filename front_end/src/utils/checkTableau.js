
import { preventNewLine } from "./createTableauHelper"
import { push } from "./createTableauHelper"


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

const checkFValue = (solution, responseTableau, setResponseTableau, iTableau) => {
    let noMatch = false;
    const solvedFValue = solution.fValue;
    const inputFValue = iTableau.fValue;

    if (parseFloat(inputFValue.toFixed(2)) !== parseFloat(solvedFValue.toFixed(2))) {
        noMatch = true;
    }

    let tempRTableau = responseTableau;
    tempRTableau.fValue = noMatch;
    setResponseTableau(tempRTableau);

    return noMatch;
};

const createRedCell = (columnArray, iTableau, setITableau, variable, i, j) => {
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

const createBasicVariableCell = (i,columnArray,iTableau)=>{
  columnArray.push(<td>X<sub>{iTableau.basicVariables[i]}</sub></td>)
}
const createRedBasicVariableCell = (columnArray, iTableau, setITableau, variable, i) => {
    columnArray.push(
      <td
        style={{ backgroundColor: 'red' }}
        contentEditable
        onKeyDown={(e) => preventNewLine(e)}
        onInput={(e) => push(e, i, variable, iTableau, setITableau)}
      >
        X<sub>{iTableau.basicVariables[i]}</sub>
      </td>
    );
  };

const createCell = (i,columnArray,iTableau,variable,j)=>{
     const cellValue = j ? iTableau[variable][i][j] : iTableau[variable][i];
    columnArray.push(<td> {cellValue}</td>)
}
const checkSingleColumn = async (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau, variable) => {
    let noMatch = false;
    let tempRows = [];
     alert(JSON.stringify(solution))
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
    let tempTab = responseTableau;
    tempTab[variable] = tempRows;
    setResponseTableau(tempTab);
    return noMatch;
};

const checkBasicVariables = async (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau, variable) => {
    let noMatch = false;
    let tempRows = [];
     
    for (let j = 0; j < dimensions.numberOfRows; j++) {
        if (iTableau[variable] && solution[variable] &&
            iTableau[variable][j] !== undefined && solution[variable][j] !== undefined) {

            if (parseFloat(iTableau[variable][j].toFixed(2)) !== parseFloat(solution[variable][j].toFixed(2))) {
                createRedBasicVariableCell(tempRows, iTableau, setITableau, variable, j)  ;
                noMatch = true;
            } else {
                createBasicVariableCell(j,tempRows,iTableau);
            }
        } else {
            
            console.log(`Undefined values detected for ${variable} at index ${j}`);
          
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
    const constraintEquationDidNotMatch = await checkMultipleColumns (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    const basicVariablesDidNotMatch = await  checkBasicVariables (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'basicVariables')
    const constantsDidNotMatch = await  checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'constants')
    const basicCoefficientsDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'basicCoefficients')
    const ratioDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'ratio')
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
    const basicVariablesDidNotMatch = await checkBasicVariables (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau, 'basicVariables')
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

    const solution = solvedArray[index]
    console.log(solution)
    const ratioDidNotMatch = await checkSingleColumn (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau,'ratio')
    const fValueDidNotMatch = checkFValue(solution, responseTableau, setResponseTableau, iTableau)
    const cRowDidNotMatch= await  checkCrow (iTableau, solution, dimensions, responseTableau, setResponseTableau, setITableau)
    if (fValueDidNotMatch||ratioDidNotMatch||cRowDidNotMatch) {
        return false
    } else {
       return true
    }

}


