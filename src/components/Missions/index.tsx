import MissionCard from './MissionCard';
import Title from '../Title';
import missions from '../../data/missions';
import './mission.css';

function Missions() {
  return (
    <section data-testid="container missions" className="container missions">
      <Title headline="Missões" />
      <section className="container missions">
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
      </section>
    </section>
  );
}

export default Missions;
