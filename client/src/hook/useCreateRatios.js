import { useEffect} from 'react'


const useCreateRatios = (dimensions,preventNewLine,temp,tempRows,setRows,setHeader,tableau,setTableau)=>{
    
    useEffect(() => {
        let temp_ratio= []
        for (let i = 0; i < dimensions.numberOfRows; i++) {
            tempRows.push(<td contentEditable onKeyDown={
                (e) => preventNewLine(e)} onInput={
                    (e) => {
                        console.log(e.target.innerText)
                    }}>0</td>)
                   temp_ratio.push(0)
        }
        for (let i = 0; i < 1; i++) {
            temp.push(<td>Ratio</td>)

        }
        setHeader(temp)
        let temp_tableau = {...tableau}
        temp_tableau.ratio= temp_ratio
        setTableau(temp_tableau)
        temp_ratio=[]
        temp = []
        setRows(tempRows)
        tempRows= []

    }, [])
}
export default useCreateRatios