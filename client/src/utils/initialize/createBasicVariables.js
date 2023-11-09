
import { bPush } from "./push"

const createBasicVariables = (dimensions,setRows,preventNewLine,tableau,setTableau)=>{
let tempBv=[]
let tempRows=[]

    let i = dimensions.numberOfColumns
    let len= dimensions.numberOfRows
    let num = i - len
    let j = 1
    while (j<=len){
        let digit = num+j
        tempRows.push(<td>X<sub  contentEditable onKeyDown={
            (e) =>preventNewLine(e)} onInput={
              (e) => {
                bPush(j-1,e,tableau,setTableau) }}>{digit}</sub></td>)
        tempBv.push(digit)
       j++
    }
    let tempTab =tableau
    tempTab.basicVariables=tempBv
    setTableau(tempTab)
    setRows(tempRows)
        tempRows=[]
        tempBv=[]
        
  
    
   
}
export default createBasicVariables