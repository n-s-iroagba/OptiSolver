import React from 'react';
import './board.css'; // You can create a separate CSS file for styling
import { useNavigate } from 'react-router';
import { Button } from 'react-bootstrap';



const Links = (props) => {
  const navigate = useNavigate()
 
  return (
    <div className="links" onClick={() => navigate(`/${props.path}`)}>
      {props.text}
    </div>
  );
};

const DashboardNav = () => {
  const navigate = useNavigate()
  const props = [
    {
      text: 'Learn About Simplex',
      path: 'learn'
    },
    {
      text: 'Practice',
      path: 'practice'
    },
    {
      text: 'Solution History',
      path: 'solution-history'
    }
  ];
  const logOut = () => {
    localStorage.removeItem('optiAuthToken')
    navigate('/')
  }

  return (
    <div className="dashboard-nav">
      {props.map((prop, index) => (
        <Links key={index} text={prop.text} path={prop.path} />
      ))}
      <br/>
      <Button variant='dark'onClick={logOut} >Log out</Button>
    </div>
  );
};

export default DashboardNav;


