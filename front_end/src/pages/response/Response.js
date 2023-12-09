import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../features/solve_simplex/context/SimplexContext'
import '../pages.css'
import { checkTableau } from '../../utils/iteration/checkTableau'


import ResponseTableau from '../../features/solve_simplex/components/ResponseTableau'

const Response = () => {
    
    const { setIteration, iteration, iTableau, setITableau, index, setIndex,solvedArray, rTableau, setRTableau, setPage, length } = useContext(MatrixContext)
   
    const tempdimensions=JSON.parse(localStorage.getItem('localDimensions'))
    const dimensions = {numberOfColumns:parseInt(tempdimensions.numberOfColumns),
                         numberOfRows:parseInt(tempdimensions.numberOfRows)}
   
    const responseSolve = async () => {
        const shouldAdvance = await checkTableau(iTableau, solvedArray, index, dimensions, rTableau, setRTableau, setITableau)
        console.log(index)
        console.log(dimensions)
        if (shouldAdvance) {
            setIteration(iteration+1)
            setIndex(index+1)
            setPage(2)
        } else {
           alert('Some values are still wrong,kindly cross check')
           setPage(6)
        }

    }

    return (
        <>
            <div className='solve-wrapper'>
                <div className="is-wrap">
                    <div><p style={{ width: '100vw', marginTop: '1cm' }}>Some of the Values were wrong and are highlighted in red for iteration number: {iteration}</p></div>
                    <div className='initial-solve'><ResponseTableau /></div>
                    <br />
                    <div className='s-button'><button onClick={responseSolve}>Solve</button></div>
                </div>
            </div>
        </>
    )
}

export default Response