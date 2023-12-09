


export const ceIPush = (i, j, e, iTableau, setITableau) => {
    let tempTab = iTableau
    let digit = Number(e.currentTarget.textContent)
    tempTab.constraintEquations[i][j] = digit
    setITableau(tempTab);
}
export const bIPush = (i, e, iTableau, setITableau) => {
    let tempTab = iTableau
    let digit = Number(e.currentTarget.textContent)
    tempTab.basicVariables[i] = digit
    setITableau(tempTab)
}
export const rIPush = (i, e, iTableau, setITableau) => {
    try {
        let tempTab = iTableau;

        // Ensure e.currentTarget is valid and has textContent
        if (e.currentTarget && e.currentTarget.textContent !== undefined) {
            let digit = Number(e.currentTarget.textContent);

            // Check if digit is a valid number
            if (!isNaN(digit)) {
                tempTab.ratio[i] = digit;
                setITableau(tempTab);
            } else {
                console.error("Invalid number entered.");
            }
        } else {
            console.error("e.currentTarget or textContent is undefined.");
        }
    } catch (error) {
        console.error("An error occurred in rIPush:", error);
    }
};

export const bcIPush = (e, i, iTableau, setITableau) => {
    let tempTab = iTableau
    let digit = Number(e.currentTarget.textContent)
    tempTab.basicCoefficients[i] = digit
    setITableau(tempTab)
}
export const ocIPush = (i, e, iTableau, setITableau) => {
    let tempTab = iTableau
    let digit = Number(e.currentTarget.textContent)
    tempTab.objectiveCoefficients[i] = digit
    setITableau(tempTab)
}
export const cIPush = (i, e, iTableau, setITableau) => {
    let tempTab = iTableau
    let digit = Number(e.currentTarget.textContent)
    tempTab.constants[i] = digit
    setITableau(tempTab)
}
export const cRowIPush = (i, e, iTableau, setITableau) => {
    let tempTab = iTableau
    let digit = Number(e.currentTarget.textContent)
    tempTab.cRow[i] = digit
    setITableau(tempTab)
}
export const fIPush = (e, iTableau, setITableau) => {
    let tempTab = iTableau
    let digit = Number(e.currentTarget.textContent)
    tempTab.fValue = digit
    setITableau(tempTab)
}