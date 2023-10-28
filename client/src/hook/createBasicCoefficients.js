

import { bcPush } from "../utils/push"
const createBasicCoefficients = (dimensions,setRows,setHeader,tableau,setTableau,preventNewLine)=>{
let tempBc = [];
let tempRows =[];
let temp = []
    for (let i = 0; i < dimensions.numberOfRows; i++) {
        tempRows.push(<td contentEditable onKeyDown={
            (e) =>preventNewLine(e)} onInput={
              (e) => {
                bcPush(e,i,tableau,setTableau)}}>0</td>)
        tempBc.push(0)     
    }
   let tempTab = {...tableau}
    tempTab.basicCoefficients=tempBc
    tempBc=[]
    setTableau(tempTab)
        setRows(tempRows)
        tempRows=[]
    for (let i = 0; i<1;i++){
        temp.push(<td>C<sub>B</sub></td>)

    }
    setHeader(temp)
    temp = []
}
export default createBasicCoefficients