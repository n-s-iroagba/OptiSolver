
import { useContext } from 'react'
import { MatrixContext } from '../../../features/solve_simplex/context/SimplexContext'
import '../tableauComponents.css'
import { preventNewLine } from '../../../utils/preventNewLine'
import { fIPush } from '../../../utils/iteration/iPush'

const FConstants = () => {
    const { tableau,iTableau,setITableau } = useContext(MatrixContext)
    
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
                    <tr className='f-box' ><td style={{
            height:'1.5cm',borderTop:'2px solid grey',textAlign:'start'
        }}>F=<span contentEditable  onKeyDown={
            (e) => preventNewLine(e)} onInput={
                (e) => {
                   fIPush(e,iTableau,setITableau)
                }}>0</span></td></tr>
                </tbody>
            </table>
        </div>

    </>

}
export default FConstants;