import { bIPush,cIPush,ceIPush,rIPush,bcIPush,fIPush,cRowIPush } from "./iPush"
import { preventNewLine } from "../preventNewLine"


const checkConstraintEquations = async (tempRTableau, iTableau, setITableau, solvedConstraintEquations, dimensions, setRTableau) => {
    const inputConstraintEquations = iTableau.constraintEquations
    let tempRow = []
    let noMatch = false
    for (let i = 0; i < dimensions.numberOfRows; i++) {
        let tempColumns = []
        for (let j = 0; j < dimensions.numberOfColumns; j++) {
            if (parseFloat(inputConstraintEquations[i][j].toFixed(2)) !== parseFloat(solvedConstraintEquations[i][j].toFixed(2))) {
                tempColumns.push(<td style={{ backgroundColor: 'red' }} contentEditable onKeyDown={
                    (e) => preventNewLine(e)} onInput={
                        (e) => {
                            ceIPush(i, j, e, iTableau, setITableau)
                        }}>{inputConstraintEquations[i][j]}</td>)
                noMatch = true
            } else {
                tempColumns.push(<td>{inputConstraintEquations[i][j]}</td>)
            }
        }
        tempRow.push(tempColumns)
    }
    tempRTableau.constraintEquations = tempRow
    setRTableau(tempRTableau)
    return noMatch;

}
const checkBasicVariables = async (solvedBasicVariables, dimensions, tempRTableau, setRTableau, iTableau, setITableau) => {
    let tempRows = []
    const inputBasicVariables = iTableau.basicVariables
    let noMatch = false
    for (let j = 0; j < dimensions.numberOfRows; j++) {
        if (parseFloat(inputBasicVariables[j].toFixed(2)) !== parseFloat(solvedBasicVariables[j].toFixed(2))) {
            tempRows.push(<td style={{ backgroundColor: 'red' }}>X<sub  contentEditable onKeyDown={
                        (e) =>preventNewLine(e)} onInput={
                          (e) => {
                            bIPush(j,e,iTableau,setITableau) }}>{inputBasicVariables[j]}</sub></td>)
            noMatch = true
        } else {
            tempRows.push(<td >X<sub>{inputBasicVariables[j]} </sub></td>)
        }
    }
    tempRTableau.basicVariables = tempRows
    setRTableau(tempRTableau)
    return noMatch;
}
const checkBasicCoefficients = async (solvedBasicCoefficients, dimensions, tempRTableau, setRTableau, iTableau, setITableau) => {
    let tempRows = []
    const inputBasicCoefficients = iTableau.basicCoefficients
    let noMatch = false
    for (let j = 0; j < dimensions.numberOfRows; j++) {
        if (parseFloat(inputBasicCoefficients[j].toFixed(2)) !== parseFloat(solvedBasicCoefficients[j].toFixed(2))) {
            tempRows.push(<td style={{ backgroundColor: 'red' }} contentEditable onKeyDown={
                (e) => preventNewLine(e)} onInput={
                    (e) => {
                        bcIPush(j, e, iTableau, setITableau)
                    }}>{inputBasicCoefficients[j]}</td>)
            noMatch = true
        } else {
            tempRows.push(<td onKeyDown={
                (e) => preventNewLine(e)}>{inputBasicCoefficients[j]}</td>)
        }
    }
    tempRTableau.basicCoefficients = tempRows
    setRTableau(tempRTableau)
    return noMatch;
}
const checkRatio = async (solvedRatio, dimensions, tempRTableau, setRTableau, iTableau, setITableau) => {
    let tempRows = []
    const inputRatio = iTableau.ratio
    let noMatch = false
    for (let j = 0; j < dimensions.numberOfRows; j++) {
        if (parseFloat(inputRatio[j].toFixed(2)) !== parseFloat(solvedRatio[j].toFixed(2))) {
            tempRows.push(<td style={{ backgroundColor: 'red' }} contentEditable onKeyDown={
                (e) => preventNewLine(e)} onInput={
                    (e) => {
                        rIPush(j, e, iTableau, setITableau)
                    }}>{inputRatio[j]}</td>)
            noMatch = true
        } else {
            tempRows.push(<td onKeyDown={
                (e) => preventNewLine(e)}>{inputRatio[j]}</td>)
        }
    }
    tempRTableau.ratio = tempRows
    setRTableau(tempRTableau)
    return noMatch;
}
const checkConstants = async (solvedConstants, dimensions, tempRTableau, setRTableau, iTableau, setITableau,) => {
    let tempRows = []
    const inputConstants = iTableau.constants
    let noMatch = false
    for (let j = 0; j < dimensions.numberOfRows; j++) {
        if (parseFloat(inputConstants[j].toFixed(2)) !== parseFloat(solvedConstants[j].toFixed(2))) {
            tempRows.push(<td style={{ backgroundColor: 'red' }} contentEditable onKeyDown={
                (e) => preventNewLine(e)} onInput={
                    (e) => {
                        cIPush(j, e, iTableau, setITableau)
                    }}>{inputConstants[j]}</td>)
            noMatch = true
        } else {
            tempRows.push(<td onKeyDown={
                (e) => preventNewLine(e)}>{inputConstants[j]}</td>)
        }
    }
    tempRTableau.constants = tempRows
    setRTableau(tempRTableau)
    return noMatch;
}
const checkCrow = async (solvedCrow, dimensions, tempRTableau, setRTableau, iTableau, setITableau) => {
    let tempRows = []
    const inputCRow = iTableau.cRow
    let noMatch = false
    for (let j = 0; j < dimensions.numberOfColumns; j++) {
        if (parseFloat(inputCRow[j].toFixed(2)) !== parseFloat(solvedCrow[j].toFixed(2))) {
            tempRows.push(<td style={{ backgroundColor: 'red' }} contentEditable onKeyDown={
                (e) => preventNewLine(e)} onInput={
                    (e) => {
                        cRowIPush(j, e, iTableau, setITableau)
                    }}>{inputCRow[j]}</td>)
            noMatch = true
        } else {
            tempRows.push(<td>{inputCRow[j]}</td>)
        }
    }
    tempRTableau.cRow = tempRows
    setRTableau(tempRTableau)
    return noMatch;
}
const checkFValue = async (solvedFValue, tempRTableau, setRTableau, iTableau, setITableau) => {
    let noMatch = false
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
    
    tempRTableau.fValue = tempFValue
    tempFValue=''
    setRTableau(tempRTableau)
    return noMatch;
}


export const checkTableau = async (iTableau, solvedArray, index, dimensions, rTableau, setRTableau, setITableau) => {
    console.log(solvedArray)
    let tempRTableau = rTableau
    const solvedConstraintEquations = solvedArray[index].constraintEquations
    const solvedBasicVariables = solvedArray[index].basicVariables
    const solvedBasicCoefficients = solvedArray[index].basicCoefficients
    const solvedConstants = solvedArray[index].constants
    const solvedCrow = solvedArray[index].cRow
    const solvedRatio= solvedArray[index].ratio
    const solvedFValue= solvedArray[index].fValue
    const constraintEquationDidNotMatch = await checkConstraintEquations(tempRTableau, iTableau, setITableau, solvedConstraintEquations, dimensions, setRTableau)
    const basicVariablesDidNotMatch = await checkBasicVariables(solvedBasicVariables, dimensions, tempRTableau, setRTableau, iTableau, setITableau)
    const constantsDidNotMatch = await checkConstants(solvedConstants, dimensions, tempRTableau, setRTableau, iTableau, setITableau,)
    const basicCoefficientsDidNotMatch = await checkBasicCoefficients(solvedBasicCoefficients, dimensions, tempRTableau, setRTableau, iTableau, setITableau) 
    const ratioDidNotMatch = await checkRatio(solvedRatio, dimensions, tempRTableau, setRTableau, iTableau, setITableau)
    const fValueDidNotMatch = await checkFValue(solvedFValue, tempRTableau, setRTableau, iTableau, setITableau)
    const cRowDidNotMatch= await checkCrow(solvedCrow, dimensions, tempRTableau, setRTableau, iTableau, setITableau)
    if (fValueDidNotMatch||basicCoefficientsDidNotMatch||ratioDidNotMatch||basicVariablesDidNotMatch || constraintEquationDidNotMatch||constantsDidNotMatch||cRowDidNotMatch) {
        return false
    } else {
       return true
    }

}

export const checkLastTableau = async (iTableau, solvedArray, index, dimensions, rTableau, setRTableau, setITableau) => {
    console.log(dimensions)
    let tempRTableau = rTableau
    const solvedConstraintEquations = solvedArray[index].constraintEquations
    const solvedBasicVariables = solvedArray[index].basicVariables
    const solvedBasicCoefficients = solvedArray[index].basicCoefficients
    const solvedConstants = solvedArray[index].constants
    const solvedCrow = solvedArray[index].cRow
    const solvedFValue= solvedArray[index].fValue
    const constraintEquationDidNotMatch = await checkConstraintEquations(tempRTableau, iTableau, setITableau, solvedConstraintEquations, dimensions, setRTableau)
    const basicVariablesDidNotMatch = await checkBasicVariables(solvedBasicVariables, dimensions, tempRTableau, setRTableau, iTableau, setITableau)
    const constantsDidNotMatch = await checkConstants(solvedConstants, dimensions, tempRTableau, setRTableau, iTableau, setITableau,)
    const basicCoefficientsDidNotMatch = await checkBasicCoefficients(solvedBasicCoefficients, dimensions, tempRTableau, setRTableau, iTableau, setITableau) 
    const fValueDidNotMatch = await checkFValue(solvedFValue, tempRTableau, setRTableau, iTableau, setITableau)
    const cRowDidNotMatch= await checkCrow(solvedCrow, dimensions, tempRTableau, setRTableau, iTableau, setITableau)
    if (fValueDidNotMatch||basicCoefficientsDidNotMatch||basicVariablesDidNotMatch || constraintEquationDidNotMatch||constantsDidNotMatch||cRowDidNotMatch) {
        return false
    } else {
       return true
    }

}

