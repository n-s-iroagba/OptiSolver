import React, { useEffect } from 'react';
import './Dashboard.css';
import Title from '../../components/title/Title';
import { useNavigate } from 'react-router-dom';
import { isAuthorized } from '../../utils/auth';
import DashboardNav from '../../components/dashboardnav/DashboardNav';
import Footer from '../../components/footer/Footer';

const Dashboard = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem('optiUserName');

  useEffect(() => {
    const authorised = isAuthorized();

    if (!authorised) {
      navigate('/login');
      alert('You are not authorised to view this page');
    }
  }, [navigate]);

  
  if (!isAuthorized()) {
    return null; 
  }

  return (
    <>
      <div className='dashboard-page'>
        <Title />
        <h1 style={{ color: 'white' }}>Welcome, {name}!</h1>
        <DashboardNav />
        <Footer />
      </div>
    </>
  );
};

export default Dashboard;
