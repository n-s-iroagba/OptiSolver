import React from 'react'

import { MatrixContext } from '../../context/SimplexContext'
import { useContext,useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import './solve.css'
import RTableau from '../../components/tableau/Response/RTableau'


const LastResponse = () => {

    const { iTableau, setPage, iteration, setIteration,solution,length} = useContext(MatrixContext)
    const [continueButton, setContinueButton]= useState('not-seen')

    const navigate = useNavigate()

    const id = localStorage.getItem('optiUserId');
    useEffect(() => {
        if (solution && solution.uniqueness === 'alternate') {
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
                <div><p className='solve-writeup' style={{color:'white'}}> Congrats, you've arrived at a reasonable point in solving the problem</p></div>
                <div className='initial-solve'><RTableau /></div>
                <br />
                <div>
                    <div>
                    <div style={{color:'white',width:'100vw',textAlign:'center'}}>You've successfully solved the problem</div> 
                    {solution.uniqueness === 'alternate' && iteration !== length ? <div style={{color:'white',width:'100vw',textAlign:'center'}}>However, this is an alternate solution, you could explore more solutions if you wish</div> : null}
                    </div>
                </div>

                <div style={{display:'flex',flexDirection:'column',width:'100vw',alignItems:'center',marginTop:'0.5cm',height:'3cm',justifyContent:'space-between'}}>
                    <div ><Button variant='dark' onClick={navHome}>End solving at this point</Button></div>
                    <div className={continueButton} ><Button variant='dark' onClick={continueSolving}>Cross check Another Aternate solution</Button></div>
                </div>
            </div >
        </>
    )
}
export default LastResponse