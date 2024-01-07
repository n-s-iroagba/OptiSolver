import React from 'react'
import { useContext } from 'react'
import { MatrixContext } from '../../../context/SimplexContext'
import '../tableau.css'

const RConstants = () => {
    const { rTableau } = useContext(MatrixContext)
    
    return <>
        <div className='ic-wrapper'>
            <div style={{ height: '1.2cm', borderLeft: '3px solid grey' }}></div>
            <table className='iconstants'>
            <thead>
                    <tr><th><td>Constants</td></th>     
                    </tr>
                </thead>
                <tbody>
                    {
                        rTableau.constants.map((row, index) => {
                            return (<tr key={index}>{row}</tr>)
                        })
                    }
                    <tr className='f-box' >{rTableau.fValue}</tr>
                </tbody>
            </table>
        </div>

    </>

}
export default RConstants;