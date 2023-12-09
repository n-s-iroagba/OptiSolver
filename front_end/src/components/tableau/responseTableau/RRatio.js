import React, { useContext } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import '../tableauComponents.css'
const RRatio = () => {
    const { rTableau } = useContext(MatrixContext)


    return <>
        <div style={{ width: '1.3cm' }} className='c-wrapper'>
            <div style={{ height: '1.2cm' }}></div>
            <table className='r'>
                <thead>
                    <tr>
                        <th><td>Ratio</td></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        rTableau.ratio.map((row, index) => {
                            return (<tr key={index}>{row}</tr>)
                        })
                    }

                    <tr className='ratio-last-row' ><td style={{ height: '1.5cm', borderTop: '2px solid grey' }}></td></tr>
                </tbody>
            </table>
        </div>
    </>
}
export default RRatio;