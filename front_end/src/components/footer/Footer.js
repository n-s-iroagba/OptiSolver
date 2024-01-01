import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='supervisor'>
        <div><b>Supervisor--</b></div>
        <div  className='name'>Professor A.O. Kuye</div>
      </div>

      <div className='students'>
        <div><b>Built By--</b></div>
        <div className='name'>J. M. Osaronwanji</div>
        <div className='name'>T. Onajite</div>
        <div  className='name'>N. S. Iroagba</div>
      </div>

      <div className='cp'>© 2023</div>
    </div>
  );
};

export default Footer;
