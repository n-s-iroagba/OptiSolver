
import { rIPush } from './iPush'

const createRatios = (dimensions, preventNewLine, setRows, iTableau, setITableau) => {


    let tempRatio = []
    let tempRows = []
    for (let i = 0; i < dimensions.numberOfRows; i++) {
        tempRows.push(<td contentEditable onKeyDown={
            (e) => preventNewLine(e)} onInput={
                (e) => {
                    rIPush(i, e, iTableau, setITableau)
                }}>0</td>)
        tempRatio.push(0)
    }


    let tempTableau = iTableau
    tempTableau.ratio = tempRatio
    setITableau(tempTableau)
    tempRatio = []

    setRows(tempRows)
    tempRows = []

}
export default createRatios