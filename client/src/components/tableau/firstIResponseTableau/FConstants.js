
import { useContext } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import '../tableauComponents.css'

const FConstants = () => {
    const { tableau } = useContext(MatrixContext)
    
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
                        tableau.constants.map((row, index) => {
                            return (<tr key={index}><td>{row}</td></tr>)
                        })
                    }
                    <tr className='f-box' ><td>0</td></tr>
                </tbody>
            </table>
        </div>

    </>

}
export default FConstants;