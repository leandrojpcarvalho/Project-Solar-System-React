import MissionCard from './MissionCard';
import Title from './Title';
import missions from '../data/missions';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
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
    </div>
  );
}

export default Missions;
