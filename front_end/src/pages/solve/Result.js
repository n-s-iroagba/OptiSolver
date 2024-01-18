import React from 'react'

import { MatrixContext } from '../../context/SimplexContext'
import { useContext,useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import './solve.css'
import RTableau from '../../components/tableau/Response/RTableau'
import TRTableau from '../../components/tableau/Response/TRTableau'


const Result = () => {

    const {setPage, iteration, setIteration,solution,length} = useContext(MatrixContext)
    const navigate = useNavigate()

    const id = localStorage.getItem('optiUserId');
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
      Congrats, you've arrived at a reasonable point in solving the problem
    </p>
  </div>
  <div className='initial-solve'>
    {(
      (solution.uniqueness === 'alternate' && iteration === length) ||
      solution.uniqueness === 'unique' ||
      solution.feasibility === 'not feasible'
    ) ? (
      <TRTableau />
    ) : (
      <RTableau />
    )}
  </div>
  <br />
  <div>
    <div>
      <div style={{ color: 'white', width: '100vw', textAlign: 'center' }}>
        You've successfully solved the problem
      </div>
      {solution.uniqueness === 'alternate' && iteration !== length ? (
        <div style={{ color: 'white', width: '100vw', textAlign: 'center' }}>
          However, this is an alternate solution, you could explore more
          solutions if you wish
        </div>
      ) : null}
    </div>
  </div>

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
    <div>
      {solution.uniqueness === 'alternate' && iteration !== length ? (
        <Button variant='dark' onClick={continueSolving}>
          Cross check Another Alternate solution
        </Button>
      ) : null}
    </div>
  </div>
</div>;

        </>
    )
}
export default Result