import React from 'react'

import { MatrixContext } from '../../context/SimplexContext'
import { useContext,useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import './solve.css'
import RTableau from '../../components/tableau/Response/RTableau'
import TRTableau from '../../components/tableau/Response/TRTableau'
import FTRTableau from '../../components/tableau/Response/FTRTableau '


const FResult = () => {

    const {setPage, iteration, setIteration,solution,length} = useContext(MatrixContext)
    const [continueButton, setContinueButton]= useState('not-seen')

    const navigate = useNavigate()

    const id = localStorage.getItem('optiUserId');
    useEffect(() => {
        if (solution && solution.uniqueness === 'alternate'&& iteration==!length) {
            setContinueButton('seen');
        }
    })

    const navHome = async () => {
        navigate('/dashboard')
        setPage(0)
    }

    const continueSolving = () => {
        setIteration(iteration + 1)
        setPage(5)
    }
   

    return (
        <>

<div className='solve-page-wrapper'>
  <div>
    <p className='solve-writeup' style={{ color: 'white' }}>
      Congrats, you've solved the problem
    </p>
  </div>
<FTRTableau/>
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      alignItems: 'center',
      marginTop: '0.5cm',
      height: '3cm',
      justifyContent: 'space-between',
    }}
  >
    <div>
      <Button variant='dark' onClick={navHome}>
        End
      </Button>
    </div>
  </div>
</div>;

        </>
    )
}
export default FResult