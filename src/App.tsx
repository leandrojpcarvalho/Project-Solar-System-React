import { useState } from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import './App.css';
import Modal from './components/Modal/Modal';

function App() {
  const [modalIsInvisible, setModalIsInvisible] = useState(true);
  const [planet, setPlanet] = useState('');

  const handlePlanet = (event: React.MouseEvent<HTMLDivElement>) => {
    console.log(event.target.id);
    setPlanet(event.target.id);
  };

  const handleClick = () => {
    setModalIsInvisible(!modalIsInvisible);
  };
  return (
    <>
      <Header />
      <SolarSystem setModalIsInvisible={ handleClick } setPlanet={ handlePlanet } />
      <Modal
        isHidden={ modalIsInvisible }
        setModalIsInvisible={ handleClick }
        planet={ planet }
      />
    </>
  );
}

export default App;
