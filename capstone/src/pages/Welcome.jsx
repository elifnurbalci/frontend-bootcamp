import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import * as React from 'react';

function Welcome() {
  return (
    <div className='hero'>
      <img src="../../images/welcome.jpg" alt="welcome" />
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, beatae accusantium nulla quibusdam saepe illum eligendi tempora facilis minima eveniet molestiae numquam ipsum quae sapiente fugiat officia cumque magni dolorem! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, beatae accusantium nulla quibusdam saepe illum eligendi tempora facilis minima eveniet molestiae numquam ipsum quae sapiente fugiat officia cumque magni dolorem!</p>
      <NavLink to="/book" style={{ textDecoration: 'none' }}>
        <Button variant="contained" style={{ color: 'white' }}>
          Search Book
        </Button>
      </NavLink>
    </div>
  );
}

export default Welcome;
