import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import planets from './data/planets';
import PlanetCard from './components/PlanetCard';

function App() {
  return (
    <>
      <Header />
      <SolarSystem />
    </>
  );
}

export default App;
