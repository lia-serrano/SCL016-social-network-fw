import React from 'react';
import lunaLogo from '../img/Lunalogo.png';

const Home = () => {
  return(
    <div>
      <div className="divHome">
        <h2 className="title1">En el nombre</h2>
        <h2 className="title2">de la luna</h2>
        <img src={lunaLogo} alt="logo" />
      </div>
    </div>
  )
};

export default Home;
