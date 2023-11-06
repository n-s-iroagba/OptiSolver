import React from 'react'
import './Footer.css'

const Footer = () => {
    return <>
        <div className='footer-wrapper'>
        <div className='footer'>
            <div className='titles'>
                <div><b>Built By--</b></div>
                <div><b>Supervisor--</b></div>
            </div>
            <div className='names'>
                <div className='students'>
                    <div>J. M. Osaronwanji</div>
                    <div>T. Onajite</div>
                    <div>N. S. Iroagba</div>
                </div>
                <div className='prof'>Professor A. O. Kuye</div>
            </div>

        </div>
        <div className='cp'>© 2023</div>
        </div>
    </>
}
export default Footer