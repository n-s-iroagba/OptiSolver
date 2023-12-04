import { ceIPush } from "./iPush";
import { cRowIPush } from  "./iPush";

const createIConstraintEquations = async ( preventNewLine, dimensions, setRows, setCrow, iTableau,setITableau) => {

  let renderedRows = []
  let matrixRows = []

  for (let i = 0; i < dimensions.numberOfRows; i++) {
    let renderedColumns = [];
    let MatrixColumns = []
    for (let j = 0; j < dimensions.numberOfColumns; j++) {
      renderedColumns.push(<td contentEditable onKeyDown={
        (e) => preventNewLine(e)} onInput={
          (e) => {
            ceIPush(i, j, e, iTableau, setITableau)
          }}>0</td>)
      MatrixColumns.push(0)
    }
    matrixRows.push(MatrixColumns)
    renderedRows.push(renderedColumns)
  }
  await setRows(renderedRows)
  renderedRows = []

  let tempVariables = []
  let tempCrow = []
  let cRowMatrix = []

  for (let j = 0; j < dimensions.numberOfColumns; j++) {
    
    tempCrow.push(<td contentEditable onKeyDown={
      (e) => preventNewLine(e)} onInput={
        (e) => {
          cRowIPush(j,e,iTableau,setITableau)
        }}>7</td>)
    cRowMatrix.push(0)
  }
  
  tempVariables = []
   await setCrow(tempCrow)
  tempCrow = []
  let tempTab = iTableau 
  tempTab.constraintEquations = matrixRows
  tempTab.cRow = cRowMatrix
  
  await setITableau(tempTab)
  matrixRows = []
  cRowMatrix = []

}
export default createIConstraintEquations