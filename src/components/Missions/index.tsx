import MissionCard from './MissionCard';
import Title from '../Title';
import missions from '../../data/missions';
import './mission.css';

type Props = {
  planet:string;
};

function Missions({ planet, setMissions }:Props) {
  return (
    <div data-testid="missions">
      <section className="container missions">
        <Title headline={ `Missões enviadas a ${planet}` } />
        <div className="container missions">
          {missions.filter((mission) => mission.destination === planet).map((mission) => {
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
      </section>
    </div>
  );
}

export default Missions;
