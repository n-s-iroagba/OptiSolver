import { cePush } from "../utils/push";
import { cRowPush } from "../utils/push";

const createConstraintEquations = (setHeader, preventNewLine, dimensions, setRows, setCrow, tableau, setTableau) => {

  let renderedRows = []
  let matrixRows = []

  for (let i = 0; i < dimensions.numberOfRows; i++) {
    let renderedColumns = [];
    let MatrixColumns = []
    for (let j = 0; j < dimensions.numberOfColumns; j++) {
      renderedColumns.push(<td contentEditable onKeyDown={
        (e) => preventNewLine(e)} onInput={
          (e) => {
            cePush(i, j, e, tableau, setTableau)
          }}>0</td>)
      MatrixColumns.push(0)
    }
    matrixRows.push(MatrixColumns)
    renderedRows.push(renderedColumns)
  }
   setRows(renderedRows)
  renderedRows = []

  let tempVariables = []
  let tempCrow = []
  let cRowMatrix = []

  for (let j = 1; j <= dimensions.numberOfColumns; j++) {
    tempVariables.push(<td>X<sub>{j}</sub></td>)
    tempCrow.push(<td contentEditable onKeyDown={
      (e) => preventNewLine(e)} onInput={
        (e) => {
          cRowPush(e)
        }}>0</td>)
    cRowMatrix.push(0)
  }
   setHeader(tempVariables)
  tempVariables = []
   setCrow(tempCrow)
  tempCrow = []
  let tempTab = { ...tableau }
  tempTab.constraintEquations = matrixRows
  tempTab.cRow = cRowMatrix
  console.log(tempTab)
  setTableau(tempTab)
  matrixRows = []
  cRowMatrix = []

}
export default createConstraintEquations