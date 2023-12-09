

import { bcPush } from "./push"
const createBasicCoefficients = async (dimensions,setRows,tableau,setTableau,preventNewLine)=>{
let tempBc = [];
let tempRows =[];

    for (let i = 0; i < dimensions.numberOfRows; i++) {
        tempRows.push(<td contentEditable onKeyDown={
            (e) =>preventNewLine(e)} onInput={
              (e) => {
                bcPush(e,i,tableau,setTableau)}}>0</td>)
        tempBc.push(0)     
    }
   let tempTab = tableau
    tempTab.basicCoefficients=tempBc
    await setTableau(tempTab)
    await setRows(tempRows)
    tempRows=[]
    tempBc=[]
   
}
export default createBasicCoefficients