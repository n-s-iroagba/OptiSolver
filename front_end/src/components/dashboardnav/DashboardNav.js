import React from 'react';
import './DashboardNav.css'; // You can create a separate CSS file for styling
import { useNavigate } from 'react-router';

const Links = (props) => {
  const navigate = useNavigate()
  return (
    <div className="links" onClick={() => navigate(`/${props.path}`)}>
      {props.text}
    </div>
  );
};

const DashboardNav = () => {
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

  return (
    <div className="dashboard-nav">
      {props.map((prop, index) => (
        <Links key={index} text={prop.text} path={prop.path} />
      ))}
    </div>
  );
};

export default DashboardNav;


