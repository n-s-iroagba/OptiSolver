export const preventNewLine = (evt) => {
    if (evt.keyCode === 13) {
      evt.preventDefault();
    }

  }


export const push = (e, i, variable, tableau, setTableau, j) => {
    let tempTab = tableau;
    let digit = Number(e.currentTarget.textContent);
    if (j !== undefined) {
        tempTab[variable][i][j] = digit;
    } else {
        tempTab[variable][i] = digit;
    }
    setTableau(tempTab);
    console.log(tempTab);
};
export const createBasicVariables = (dimensions,setRows,tableau,setTableau)=>{
    let tempBv=[]
    let tempRows=[]
    let variable = 'basicVariables'
    let tempTab = tableau
    
        let i = dimensions.numberOfColumns
        let len= dimensions.numberOfRows
        let num = i - len
        let j = 1
        while (j<=len){
            let digit = num+j
            tempRows.push(<td>X<sub  contentEditable onKeyDown={
                (e) =>preventNewLine(e)} onInput={
                  (e) => {
                    push(e, i, variable, tableau, setTableau) }}>{digit}</sub></td>)
            tempBv.push(digit)
           j++
        }
        tempTab.basicVariables = tempBv
        setRows(tempRows)
        setTableau(tempTab)
        tempRows=[]
    }


const createSingleEntry = (tableau, setTableau, cells, variable, i, j) => {
    return cells.push(<td contentEditable onKeyDown={
        (e) => preventNewLine(e)} onInput={
            (e) => {
                push(e, i, variable, tableau, setTableau, j)
            }}>0</td>)
}

export const createSingleColumn = (numberOfRows, setRows, tableau, setTableau, variable) => {
    let columnRows = []
    let tableauVariableValues = []
    for (let i = 0; i < numberOfRows; i++) {
        createSingleEntry(tableau, setTableau, columnRows, variable, i)
        tableauVariableValues.push(0)
    }
    let tempTab = tableau
    tempTab[variable] = tableauVariableValues
    setTableau(tempTab)
    setRows(columnRows)
    columnRows = []
    tableauVariableValues = []
}

export const createMultipleColumns = (numberOfRows, numberOfColumns,setRows, tableau, setTableau, variable, setHeader) => {
    let rows = []
    let crow =[]
    let tableauCrow = []
    let columns = []
    let headTag = []
    let tableauVariableValues = []
    let tableauRows = []
    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < numberOfColumns; j++) {
            createSingleEntry(tableau, setTableau, columns, variable, i,j)
            tableauVariableValues.push(0)
        }
        rows.push(columns)
        columns = []
        tableauRows.push(tableauVariableValues)
        tableauVariableValues = []
    }
    for (let j = 1; j <= numberOfColumns; j++) {
        headTag.push(<td>X<sub>{j}</sub></td>)
    }
    for (let j = 0; j < numberOfColumns; j++) {
        createSingleEntry(tableau, setTableau, crow, variable, j)
        tableauCrow.push(0)
    }
    let tempTab = tableau
    tempTab[variable] = tableauRows
    tempTab.crow = tableauCrow
    setTableau(tempTab)
    setRows(rows)
    setHeader(headTag)
    columns = []
    tableauRows = []
    headTag = []
    rows=[]
}

export const createfirstTableauSingleColumn = (numberOfRows, setRows, inputTableau, variable) => {
    const value = inputTableau[variable]
    let rows = []
    for (let i = 0; i < numberOfRows; i++) {
        rows.push(<td>{value[i]}</td>)
    }
    setRows(rows)
    rows = []
}

export const createFirstTableauMultiColumns= (numberOfRows, numberOfColumns, setRows, inputTableau, variable) => {
    const value = inputTableau[variable]
    let rows = []
    let columns = []
    for (let i = 0; i < numberOfRows; i++) {
        for (let j = 0; j < numberOfColumns; j++) {
            columns.push(<td>{value[j]}</td>)
        }
        rows.push(columns)
        columns = []
    }
    setRows(rows)
    rows = []
}


