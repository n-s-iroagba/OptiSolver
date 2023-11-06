
import { rIPush } from "../iteration/iPush"
const createFRatios = (dimensions, preventNewLine, setRows, tableau, setTableau) => {


    let tempRatio = []
    let tempRows = []
    for (let i = 0; i < dimensions.numberOfRows; i++) {
        tempRows.push(<td contentEditable onKeyDown={
            (e) => preventNewLine(e)} onInput={
                (e) => {
                    rIPush(i, e, tableau, setTableau)
                }}>0</td>)
        tempRatio.push(0)
    }


    let tempTableau = tableau
    tempTableau.ratio = tempRatio
    setTableau(tempTableau)
    tempRatio = []

    setRows(tempRows)
    tempRows = []

}
export default createFRatios