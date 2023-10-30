
import { cPush } from "./push"
import { fPush } from "./push"

const createConstant = (dimensions,preventNewLine,setRows,tableau,setTableau,setFValue)=>{
  
    let tempConstants =[]
    let tempRows= []
    
    
        for (let i = 0; i < dimensions.numberOfRows; i++) {
            tempRows.push(<td contentEditable onKeyDown={
                (e) => preventNewLine(e)} onInput={
                    (e) => {
                       cPush(i,e,tableau,setTableau)
                    }}>0</td>)
                    tempConstants.push(0)
        }

        let tempFvalue = <td style={{
            height:'1.5cm',borderTop:'2px solid grey',textAlign:'start'
        }}>F = <span contentEditable  onKeyDown={
            (e) => preventNewLine(e)} onInput={
                (e) => {
                   fPush(e,tableau,setTableau)
                }}>{tableau.fValue}</span></td>
        setRows(tempRows)
        let tempTab =tableau
        tempTab.constants= tempConstants
        setTableau(tempTab)
        setFValue(tempFvalue)
        tempConstants= []
        tempRows= []
        tempFvalue = null
}
export default createConstant