import React from 'react'
import '../tableauComponents.css'

const HConstants = ({rows,fValue}) => {
   
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
                        rows.map((row, index) => {
                            return (<tr key={index}><td>{row}</td></tr>)
                        })
                    }
                    <tr className='f-box' ><td>{fValue}</td></tr>
                </tbody>
            </table>
        </div>

    </>

}
export default HConstants;