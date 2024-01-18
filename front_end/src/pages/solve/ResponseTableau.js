import React, { useState } from 'react'
import { MatrixContext } from '../../context/SimplexContext'
import { useContext } from 'react'
import { Button } from 'react-bootstrap'
import './solve.css'
import RTableau from '../../components/tableau/Response/RTableau'
import { checkTableau } from '../../utils/checkTableau'



const ResponseTableau = () => {
   
    const { iTableau, setPage, dimensions, solvedArray, responseTableau, iteration, setResponseTableau, setIteration, setITableau, page} = useContext(MatrixContext)
    const check = async () => {
        const shouldAdvance = await checkTableau(iTableau, solvedArray, iteration-1, dimensions, responseTableau, setResponseTableau, setITableau)
        console.log(solvedArray[iteration-1])
        if (shouldAdvance) {
           if (solvedArray[iteration - 1].optimal == true) {
                setPage(-2)
            }else{
                setPage(5)
                setIteration(iteration + 1)
            }
      
        }else {
            if (page === 7) {
                setPage(8)
            } else { setPage(7) }
        }
    }
   
    return (
        <>

            <div className='solve-page-wrapper'>
                <div><p className='solve-writeup' > Some values values for iteration number {iteration} are wrong and highlighted in red</p></div>
                <div className='initial-solve'><RTableau /></div>
                <br />
                <div><Button variant='dark' onClick={check}>Recheck for iteration {iteration}</Button></div>
          </div >

        </>
    )
}
export default ResponseTableau