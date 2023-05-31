import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import missions from './data/missions';
import MissionCard from './components/MissionCard';

function App() {
  return (
    <>
      <Header />
      <SolarSystem />
      <Missions />
      {missions.map((mission) => {
        const { name, year, country, destination } = mission;
        return (
          <MissionCard
            key={ name }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />
        );
      })}
    </>
  );
}

export default App;
