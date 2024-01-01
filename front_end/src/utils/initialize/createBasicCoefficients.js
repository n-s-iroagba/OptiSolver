import { preventNewLine } from "../preventNewLine";
import { push } from "./push";


const createSingleEntry = (tableau,setTableau,cells,variable,i,j)=>{
    return cells.push(<td contentEditable onKeyDown={
        (e) =>preventNewLine(e)} onInput={
          (e) => {
            push(e,i,variable,tableau,setTableau,j)}}>0</td>)
}
export const createSingleColumn = async (numberOfRows,setRows,tableau,setTableau,variable)=>{
    let columnRows = []
    let tableauVariableValues = []
    for (let i = 0; i < numberOfRows; i++) {
        createSingleEntry(tableau,setTableau,columnRows,variable,i)
        tableauVariableValues.push(0)     
    }
   let tempTab = tableau
    tempTab[variable]=tableauVariableValues
    await setTableau(tempTab)
    await setRows(columnRows)
    columnRows = []
    tableauVariableValues=[] 
}
export const createMultipleColumn = async (numberOfRows,numberOfColumns,setRows,tableau,setTableau,variable,setHeader)=>{
    let rows = []
    let columns=[]
    let headTag=[]
    let tableauVariableValues = []
    let tableauRows =[]
    for (let i = 0; i < numberOfRows; i++) {
    for (let j = 0; j < numberOfColumns; j++) {
        createSingleEntry(tableau,setTableau,columns,variable,i)
        tableauVariableValues.push(0)     
    }
    rows.push(columns)
    columns=[]
    tableauRows.push(tableauVariableValues)
    tableauVariableValues=[]
}
for (let j = 1; j <= numberOfColumns; j++) {
    headTag.push(<th><td>X<sub>{j}</sub></td></th>)


}
   let tempTab = tableau
    tempTab[variable]=tableauRows
    await setTableau(tempTab)
    await setRows(rows)
    columns = []
    tableauRows=[]
    setHeader(headTag)
    headTag=[]
}

