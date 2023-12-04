import React from 'react'

const Ratio = ({rows}) => {
  
    return <>
     <div style={{width:'1.3cm'}}className='c-wrapper'>
     <div style={{height:'1.2cm'}}></div>
        <table className='r'>
            <thead>
                <tr>
                        <th><td>Ratio</td></th>
                </tr>
            </thead>
            <tbody>
                {
                    rows.map((row, index) => {
                        return (<tr key={index}><td>{row}</td></tr>)
                    })
                }
                
                <tr className='ratio-last-row' ><td style={{height:'1.5cm',borderTop:'2px solid grey'}}></td></tr>
            </tbody>
        </table>
        </div>
    </>
}
export default Ratio;