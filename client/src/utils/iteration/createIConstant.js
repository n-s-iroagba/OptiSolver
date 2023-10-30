
import { cIPush } from "./iPush"
import { fIPush } from "./iPush"

const createIConstant = (dimensions,preventNewLine,setRows,iTableau,setITableau,setIFValue)=>{
  
    let tempConstants =[]
    let tempRows= []
    
    
        for (let i = 0; i < dimensions.numberOfRows; i++) {
            tempRows.push(<td contentEditable onKeyDown={
                (e) => preventNewLine(e)} onInput={
                    (e) => {
                       cIPush(i,e,iTableau,setITableau)
                    }}>0</td>)
                    tempConstants.push(0)
        }

        let tempFvalue = <td style={{
            height:'1.5cm',borderTop:'2px solid grey',textAlign:'start'
        }}>F = <span contentEditable  onKeyDown={
            (e) => preventNewLine(e)} onInput={
                (e) => {
                   fIPush(e,iTableau,setITableau)
                }}>{iTableau.fValue}</span></td>
        setRows(tempRows)
        let tempTab =iTableau
        tempTab.constants= tempConstants
        setITableau(tempTab)
        setIFValue(tempFvalue)
        tempConstants= []
        tempRows= []
        tempFvalue = null
}
export default createIConstant