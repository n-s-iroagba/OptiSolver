import { bcIPush } from "./iPush"
const createIBasicCoefficients = (dimensions, setRows, preventNewLine, tableau, setTableau) => {
    let tempBc = []
    let tempRows = []

    for (let i = 0; i < dimensions.numberOfRows; i++) {
        tempRows.push(<td contentEditable onKeyDown={
            (e) => preventNewLine(e)} onInput={
                (e) => {
                    bcIPush(e, i, tableau, setTableau)
                }}>0</td>)
        tempBc.push(0)
    }
    let tempTab = { ...tableau }
    tempTab.basicCoefficients = tempBc
    tempBc = []
    setTableau(tempTab)
    setRows(tempRows)
    tempRows = []
}
export default createIBasicCoefficients