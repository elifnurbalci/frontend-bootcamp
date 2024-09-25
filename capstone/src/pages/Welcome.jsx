import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import * as React from 'react';

function Welcome() {
  return (
    <div className='hero'>
      <img src="../../images/welcome.jpg" alt="welcome" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <NavLink to="/book" style={{ textDecoration: 'none' }}>
        <Button variant="contained" style={{ color: 'white', fontWeight: 600}}>
          Search Book
        </Button>
      </NavLink>
    </div>
  );
}

export default Welcome;
